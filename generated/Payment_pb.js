/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var FiatAmount_pb = require('./FiatAmount_pb.js');
goog.object.extend(proto, FiatAmount_pb);
var XRPAmount_pb = require('./XRPAmount_pb.js');
goog.object.extend(proto, XRPAmount_pb);
goog.exportSymbol('proto.Payment', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Payment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Payment.oneofGroups_);
};
goog.inherits(proto.Payment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Payment.displayName = 'proto.Payment';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Payment.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.Payment.AmountCase = {
  AMOUNT_NOT_SET: 0,
  XRP_AMOUNT: 1,
  FIAT_AMOUNT: 2
};

/**
 * @return {proto.Payment.AmountCase}
 */
proto.Payment.prototype.getAmountCase = function() {
  return /** @type {proto.Payment.AmountCase} */(jspb.Message.computeOneofCase(this, proto.Payment.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Payment.prototype.toObject = function(opt_includeInstance) {
  return proto.Payment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Payment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Payment.toObject = function(includeInstance, msg) {
  var f, obj = {
    xrpAmount: (f = msg.getXrpAmount()) && XRPAmount_pb.XRPAmount.toObject(includeInstance, f),
    fiatAmount: (f = msg.getFiatAmount()) && FiatAmount_pb.FiatAmount.toObject(includeInstance, f),
    destination: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Payment}
 */
proto.Payment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Payment;
  return proto.Payment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Payment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Payment}
 */
proto.Payment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new XRPAmount_pb.XRPAmount;
      reader.readMessage(value,XRPAmount_pb.XRPAmount.deserializeBinaryFromReader);
      msg.setXrpAmount(value);
      break;
    case 2:
      var value = new FiatAmount_pb.FiatAmount;
      reader.readMessage(value,FiatAmount_pb.FiatAmount.deserializeBinaryFromReader);
      msg.setFiatAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Payment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Payment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Payment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Payment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getXrpAmount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      XRPAmount_pb.XRPAmount.serializeBinaryToWriter
    );
  }
  f = message.getFiatAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      FiatAmount_pb.FiatAmount.serializeBinaryToWriter
    );
  }
  f = message.getDestination();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional XRPAmount XRP_amount = 1;
 * @return {?proto.XRPAmount}
 */
proto.Payment.prototype.getXrpAmount = function() {
  return /** @type{?proto.XRPAmount} */ (
    jspb.Message.getWrapperField(this, XRPAmount_pb.XRPAmount, 1));
};


/** @param {?proto.XRPAmount|undefined} value */
proto.Payment.prototype.setXrpAmount = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.Payment.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.Payment.prototype.clearXrpAmount = function() {
  this.setXrpAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Payment.prototype.hasXrpAmount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FiatAmount fiat_amount = 2;
 * @return {?proto.FiatAmount}
 */
proto.Payment.prototype.getFiatAmount = function() {
  return /** @type{?proto.FiatAmount} */ (
    jspb.Message.getWrapperField(this, FiatAmount_pb.FiatAmount, 2));
};


/** @param {?proto.FiatAmount|undefined} value */
proto.Payment.prototype.setFiatAmount = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.Payment.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.Payment.prototype.clearFiatAmount = function() {
  this.setFiatAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Payment.prototype.hasFiatAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string destination = 3;
 * @return {string}
 */
proto.Payment.prototype.getDestination = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.Payment.prototype.setDestination = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto);