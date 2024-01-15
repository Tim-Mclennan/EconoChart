import { Map } from "@mui/icons-material";
import express from "express";
import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const daySchema = new Schema(
    {
        date: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "AUD",
            get: (v) => v / 100
        }, 
        expenses: {
            type: mongoose.Types.Currency,
            currency: "AUD",
            get: (v) => v / 100
        },
    },
    { toJson: { getters: true } }
)

const monthSchema = new Schema(
    {
        month: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "AUD",
            get: (v) => v / 100
        }, 
        expenses: {
            type: mongoose.Types.Currency,
            currency: "AUD",
            get: (v) => v / 100
        },
        operationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "AUD",
            get: (v) => v / 100
        },
        nonOperationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "AUD",
            get: (v) => v / 100
        },
    },
    { toJson: { getters: true } }
)

const KPISchema = new Schema(
    {
        totalProfit: {
            type: mongoose.Types.Currency,
            currency: "AUD",
            get: (v) => v / 100
        },
        totalRevenue: {
            type: mongoose.Types.Currency,
            currency: "AUD",
            get: (v) => v / 100
        },
        totalExpenses: {
            type: mongoose.Types.Currency,
            currency: "AUD",
            get: (v) => v / 100
        },
        expenseByCategory: {
            type: Map,
            of: {
                type: mongoose.Types.Currency,
                currency: "AUD",
                get: (v) => v / 100
            }
        },
        monthlyData: [monthSchema],
        dailyData: [daySchema],

    }
);

const KPI = mongoose.model("KPI", KPISchema)

export default KPI;