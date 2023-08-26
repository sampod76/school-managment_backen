"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeModel = void 0;
const mongoose_1 = require("mongoose");
const earnSchema = new mongoose_1.Schema({
    incomeName: { type: String, required: true },
    incomeHeader: { type: String, required: true },
    date: { type: String, required: true },
    invoiceNumber: { type: String, required: true },
    amount: { type: String, required: true },
    document: { type: String, required: false },
    description: { type: String, required: true },
});
exports.IncomeModel = (0, mongoose_1.model)('Income', earnSchema);
