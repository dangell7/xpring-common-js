import { Currency } from "../build/generated/currency_pb";
import { FiatAmount } from "../build/generated/fiat_amount_pb";
import { Payment } from "../build/generated/payment_pb";
import Serializer from "../src/serializer";
import { Transaction } from "../build/generated/transaction_pb";
import { XRPAmount } from "../build/generated/xrp_amount_pb";
import { assert } from "chai";
import "mocha";
import Utils from "../src/utils";

/* eslint-disable @typescript-eslint/no-non-null-assertion */

describe("serializer", function(): void {
  it("serializes a payment in XRP from a classic address", function(): void {
    // GIVEN a transaction which represents a payment denominated in XRP.
    const value = "1000";
    const destination = "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh";
    const fee = "10";
    const lastLedgerSequence = 20;
    const sequence = 1;
    const account = "r9LqNeG6qHxjeUocjvVki2XR35weJ9mZgQ";
    const publicKey =
      "031D68BC1A142E6766B2BDFB006CCFE135EF2E0E2E94ABB5CF5C9AB6104776FBAE";

    const paymentAmount = new XRPAmount();
    paymentAmount.setDrops(value);

    const payment = new Payment();
    payment.setDestination(destination);
    payment.setXrpAmount(paymentAmount);

    const transactionFee = new XRPAmount();
    transactionFee.setDrops(fee);

    const transaction = new Transaction();
    transaction.setAccount(account);
    transaction.setFee(transactionFee);
    transaction.setSequence(sequence);
    transaction.setPayment(payment);
    transaction.setSigningPublicKeyHex(publicKey);
    transaction.setLastLedgerSequence(lastLedgerSequence);

    // WHEN the transaction is serialized to JSON.
    const serialized = Serializer.transactionToJSON(transaction);

    // THEN the result is as expected.
    const expectedJSON = {
      Account: account,
      Amount: value.toString(),
      Destination: destination,
      Fee: fee,
      LastLedgerSequence: lastLedgerSequence,
      Sequence: sequence,
      TransactionType: "Payment",
      SigningPubKey: publicKey
    };
    assert.deepEqual(serialized, expectedJSON);
  });

  it("serializes a payment in XRP from an X-Address with no tag", function(): void {
    // GIVEN a transaction which represents a payment denominated in XRP.
    const value = "1000";
    const destination = "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh";
    const fee = "10";
    const lastLedgerSequence = 20;
    const sequence = 1;
    const account = "XVPcpSm47b1CZkf5AkKM9a84dQHe3m4sBhsrA4XtnBECTAc";
    const publicKey =
      "031D68BC1A142E6766B2BDFB006CCFE135EF2E0E2E94ABB5CF5C9AB6104776FBAE";

    const paymentAmount = new XRPAmount();
    paymentAmount.setDrops(value);

    const payment = new Payment();
    payment.setDestination(destination);
    payment.setXrpAmount(paymentAmount);

    const transactionFee = new XRPAmount();
    transactionFee.setDrops(fee);

    const transaction = new Transaction();
    transaction.setAccount(account);
    transaction.setFee(transactionFee);
    transaction.setSequence(sequence);
    transaction.setPayment(payment);
    transaction.setSigningPublicKeyHex(publicKey);
    transaction.setLastLedgerSequence(lastLedgerSequence);

    // WHEN the transaction is serialized to JSON.
    const serialized = Serializer.transactionToJSON(transaction);

    // THEN the result is as expected.
    const expectedJSON = {
      Account: Utils.decodeXAddress(account)!.address,
      Amount: value.toString(),
      Destination: destination,
      Fee: fee,
      LastLedgerSequence: lastLedgerSequence,
      Sequence: sequence,
      TransactionType: "Payment",
      SigningPubKey: publicKey
    };
    assert.deepEqual(serialized, expectedJSON);
  });

  it("fails to serializes a payment in XRP from an X-Address with a tag", function(): void {
    // GIVEN a transaction which represents a payment denominated in XRP.
    const value = "1000";
    const destination = "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh";
    const fee = "10";
    const lastLedgerSequence = 20;
    const sequence = 1;
    const account = "XVPcpSm47b1CZkf5AkKM9a84dQHe3mTAxgxfLw2qYoe7Boa";
    const publicKey =
      "031D68BC1A142E6766B2BDFB006CCFE135EF2E0E2E94ABB5CF5C9AB6104776FBAE";

    const paymentAmount = new XRPAmount();
    paymentAmount.setDrops(value);

    const payment = new Payment();
    payment.setDestination(destination);
    payment.setXrpAmount(paymentAmount);

    const transactionFee = new XRPAmount();
    transactionFee.setDrops(fee);

    const transaction = new Transaction();
    transaction.setAccount(account);
    transaction.setFee(transactionFee);
    transaction.setSequence(sequence);
    transaction.setPayment(payment);
    transaction.setSigningPublicKeyHex(publicKey);
    transaction.setLastLedgerSequence(lastLedgerSequence);

    // WHEN the transaction is serialized to JSON.
    const serialized = Serializer.transactionToJSON(transaction);

    // THEN the result is undefined.
    assert.isUndefined(serialized);
  });

  it("fails to serializes a payment in XRP when account is undefined", function(): void {
    // GIVEN a transaction which represents a payment denominated in XRP.
    const value = "1000";
    const destination = "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh";
    const fee = "10";
    const lastLedgerSequence = 20;
    const sequence = 1;
    const publicKey =
      "031D68BC1A142E6766B2BDFB006CCFE135EF2E0E2E94ABB5CF5C9AB6104776FBAE";

    const paymentAmount = new XRPAmount();
    paymentAmount.setDrops(value);

    const payment = new Payment();
    payment.setDestination(destination);
    payment.setXrpAmount(paymentAmount);

    const transactionFee = new XRPAmount();
    transactionFee.setDrops(fee);

    const transaction = new Transaction();
    transaction.setFee(transactionFee);
    transaction.setSequence(sequence);
    transaction.setPayment(payment);
    transaction.setSigningPublicKeyHex(publicKey);
    transaction.setLastLedgerSequence(lastLedgerSequence);

    // WHEN the transaction is serialized to JSON.
    const serialized = Serializer.transactionToJSON(transaction);

    // THEN the result is undefined.
    assert.isUndefined(serialized);
  });

  it("serializes a payment to an X-address with a tag in XRP", function(): void {
    // GIVEN a transaction which represents a payment to a destination and tag, denominated in XRP.
    const value = "1000";
    const destination = "XVfC9CTCJh6GN2x8bnrw3LtdbqiVCUvtU3HnooQDgBnUpQT";
    const fee = "10";
    const lastLedgerSequence = 20;
    const sequence = 1;
    const account = "r9LqNeG6qHxjeUocjvVki2XR35weJ9mZgQ";
    const publicKey =
      "031D68BC1A142E6766B2BDFB006CCFE135EF2E0E2E94ABB5CF5C9AB6104776FBAE";

    const paymentAmount = new XRPAmount();
    paymentAmount.setDrops(value);

    const payment = new Payment();
    payment.setDestination(destination);
    payment.setXrpAmount(paymentAmount);

    const transactionFee = new XRPAmount();
    transactionFee.setDrops(fee);

    const transaction = new Transaction();
    transaction.setAccount(account);
    transaction.setFee(transactionFee);
    transaction.setSequence(sequence);
    transaction.setPayment(payment);
    transaction.setSigningPublicKeyHex(publicKey);
    transaction.setLastLedgerSequence(lastLedgerSequence);

    // WHEN the transaction is serialized to JSON.
    const serialized = Serializer.transactionToJSON(transaction);

    // THEN the result is as expected.
    const expectedJSON = {
      Account: account,
      Amount: value.toString(),
      Destination: "rU6K7V3Po4snVhBBaU29sesqs2qTQJWDw1",
      DestinationTag: 12345,
      Fee: fee,
      LastLedgerSequence: lastLedgerSequence,
      Sequence: sequence,
      TransactionType: "Payment",
      SigningPubKey: publicKey
    };
    assert.deepEqual(serialized, expectedJSON);
  });

  it("serializes a payment to an X-address without a tag in XRP", function(): void {
    // GIVEN a transaction which represents a payment to a destination without a tag, denominated in XRP.
    const value = "1000";
    const destination = "XVfC9CTCJh6GN2x8bnrw3LtdbqiVCUFyQVMzRrMGUZpokKH";
    const fee = "10";
    const lastLedgerSequence = 20;
    const sequence = 1;
    const account = "r9LqNeG6qHxjeUocjvVki2XR35weJ9mZgQ";
    const publicKey =
      "031D68BC1A142E6766B2BDFB006CCFE135EF2E0E2E94ABB5CF5C9AB6104776FBAE";

    const paymentAmount = new XRPAmount();
    paymentAmount.setDrops(value);

    const payment = new Payment();
    payment.setDestination(destination);
    payment.setXrpAmount(paymentAmount);

    const transactionFee = new XRPAmount();
    transactionFee.setDrops(fee);

    const transaction = new Transaction();
    transaction.setAccount(account);
    transaction.setFee(transactionFee);
    transaction.setSequence(sequence);
    transaction.setPayment(payment);
    transaction.setSigningPublicKeyHex(publicKey);
    transaction.setLastLedgerSequence(lastLedgerSequence);

    // WHEN the transaction is serialized to JSON.
    const serialized = Serializer.transactionToJSON(transaction);

    // THEN the result is as expected.
    const expectedJSON = {
      Account: account,
      Amount: value.toString(),
      Destination: "rU6K7V3Po4snVhBBaU29sesqs2qTQJWDw1",
      Fee: fee,
      LastLedgerSequence: lastLedgerSequence,
      Sequence: sequence,
      TransactionType: "Payment",
      SigningPubKey: publicKey
    };
    assert.deepEqual(serialized, expectedJSON);
  });
});
