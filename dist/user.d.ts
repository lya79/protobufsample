import * as $protobuf from "protobufjs";
/** Namespace user. */
export namespace user {

    /** Properties of a GetInfoRequest. */
    interface IGetInfoRequest {

        /** GetInfoRequest userID */
        userID?: (string|null);
    }

    /** Represents a GetInfoRequest. */
    class GetInfoRequest implements IGetInfoRequest {

        /**
         * Constructs a new GetInfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IGetInfoRequest);

        /** GetInfoRequest userID. */
        public userID: string;

        /**
         * Creates a new GetInfoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetInfoRequest instance
         */
        public static create(properties?: user.IGetInfoRequest): user.GetInfoRequest;

        /**
         * Encodes the specified GetInfoRequest message. Does not implicitly {@link user.GetInfoRequest.verify|verify} messages.
         * @param message GetInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IGetInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetInfoRequest message, length delimited. Does not implicitly {@link user.GetInfoRequest.verify|verify} messages.
         * @param message GetInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IGetInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetInfoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.GetInfoRequest;

        /**
         * Decodes a GetInfoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.GetInfoRequest;

        /**
         * Verifies a GetInfoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetInfoRequest
         */
        public static fromObject(object: { [k: string]: any }): user.GetInfoRequest;

        /**
         * Creates a plain object from a GetInfoRequest message. Also converts values to other types if specified.
         * @param message GetInfoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.GetInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetInfoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
