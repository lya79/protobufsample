/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.user = (function() {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

    user.GetInfoRequest = (function() {

        /**
         * Properties of a GetInfoRequest.
         * @memberof user
         * @interface IGetInfoRequest
         * @property {string|null} [userID] GetInfoRequest userID
         */

        /**
         * Constructs a new GetInfoRequest.
         * @memberof user
         * @classdesc Represents a GetInfoRequest.
         * @implements IGetInfoRequest
         * @constructor
         * @param {user.IGetInfoRequest=} [properties] Properties to set
         */
        function GetInfoRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetInfoRequest userID.
         * @member {string} userID
         * @memberof user.GetInfoRequest
         * @instance
         */
        GetInfoRequest.prototype.userID = "";

        /**
         * Creates a new GetInfoRequest instance using the specified properties.
         * @function create
         * @memberof user.GetInfoRequest
         * @static
         * @param {user.IGetInfoRequest=} [properties] Properties to set
         * @returns {user.GetInfoRequest} GetInfoRequest instance
         */
        GetInfoRequest.create = function create(properties) {
            return new GetInfoRequest(properties);
        };

        /**
         * Encodes the specified GetInfoRequest message. Does not implicitly {@link user.GetInfoRequest.verify|verify} messages.
         * @function encode
         * @memberof user.GetInfoRequest
         * @static
         * @param {user.IGetInfoRequest} message GetInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetInfoRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userID != null && Object.hasOwnProperty.call(message, "userID"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userID);
            return writer;
        };

        /**
         * Encodes the specified GetInfoRequest message, length delimited. Does not implicitly {@link user.GetInfoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.GetInfoRequest
         * @static
         * @param {user.IGetInfoRequest} message GetInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetInfoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof user.GetInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.GetInfoRequest} GetInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetInfoRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.GetInfoRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetInfoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.GetInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.GetInfoRequest} GetInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetInfoRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetInfoRequest message.
         * @function verify
         * @memberof user.GetInfoRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetInfoRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!$util.isString(message.userID))
                    return "userID: string expected";
            return null;
        };

        /**
         * Creates a GetInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.GetInfoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.GetInfoRequest} GetInfoRequest
         */
        GetInfoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.user.GetInfoRequest)
                return object;
            var message = new $root.user.GetInfoRequest();
            if (object.userID != null)
                message.userID = String(object.userID);
            return message;
        };

        /**
         * Creates a plain object from a GetInfoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.GetInfoRequest
         * @static
         * @param {user.GetInfoRequest} message GetInfoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetInfoRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userID = "";
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = message.userID;
            return object;
        };

        /**
         * Converts this GetInfoRequest to JSON.
         * @function toJSON
         * @memberof user.GetInfoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetInfoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetInfoRequest;
    })();

    return user;
})();

module.exports = $root;
