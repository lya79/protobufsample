# 1. 工具安裝

## 1.1. 安裝 nodejs
網址:  https://nodejs.org/

## 1.2. 安裝 protobuf
下載後解壓縮將裡面 `bin`目錄的 `protoc.exe`, 放置到此專案的 `bin`目錄底下`.

網址: https://github.com/protocolbuffers/protobuf/releases

## 1.3. 安裝 protobufjs

### 方法一
如果是 clone這個專案則只需要執行安裝就好
```shell
npm install
npm install -g protobufjs
```

### 方法二(在新專案時使用)
網址 https://github.com/protobufjs/protobuf.js/releases

> 備註: protobuf工具只能編譯出 js, 無法產生 ts, 因此需要這個工具將 js編譯成 ts.

```shell
npm init # 初始化 package.json
npm install protobufjs --save # 安裝 protobufjs
npm install -g protobufjs # 安裝到全局
```

### 移除工具
```shell
npm uninstall protobufjs # 移除 protobufjs
npm uninstall protobufjs --save  # 更新 package.json
```

## 1.4. 安裝 protoc-gen-go
```shell
go get -u github.com/golang/protobuf/protoc-gen-go
```

# 2. 產生 protobuf檔案

撰寫好 .proto檔案後即可參考下列範例指令產生 protobuf檔案.
> proto3語法說明: https://developers.google.com/protocol-buffers/docs/proto

```shell
# 範例: 產生 ts的 proto
pbjs -t static-module -w commonjs -o .\dist\user.js .\proto\user.proto
pbts -o .\dist\user.d.ts .\dist\user.js

# 範例: 產生 golang的 proto
.\bin\protoc-3.19.1\protoc.exe --go_out=.\dist\ .\proto\user.proto

# 範例: 產生 golang使用 grpc時的 proto
.\bin\protoc-3.19.1\protoc.exe --go_out=plugins=grpc:.\dist\ .\proto\grpcUser.proto
```

> 備註: 如果 js或 ts需要使用 grpc則需要另外找方法處理. 

# 3. Cocos內使用 protobuf
直接將產生後的 .js和 .ts一併丟入到 Cocos內即可.

### 範例
```typescript

import { user } from "./user"

const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    start() {
        let obj = user.GetInfoRequest.create({ userID: "ABC123" });
        let writer = user.GetInfoRequest.encode(obj);
        let buffer = writer.finish(); // 物件轉成訊息

        try {
            let obj2 = user.GetInfoRequest.decode(buffer); // 訊息轉成物件
            cc.log(obj2.toJSON());
        } catch (e) {
            if (e instanceof protobuf.util.ProtocolError) {
            // e.instance holds the so far decoded message with missing required fields
            } else {
            // wire format is invalid
            }
        }

        // 其他 API使用方式參考官網 https://github.com/protobufjs/protobuf.js
    }
}

```