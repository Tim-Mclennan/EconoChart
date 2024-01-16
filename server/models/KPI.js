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

// Define a schema for the category expense
const CategoryExpenseSchema = new Schema({
  category: String,
  amount: {
    type: Number,
    get: v => (v / 100).toFixed(2) // Assuming you want to store currency in cents and convert to dollars
  }
});

// Create a model for the category expense
const CategoryExpense = mongoose.model('CategoryExpense', CategoryExpenseSchema);


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
        expenseByCategory: [{
            type: Schema.Types.ObjectId,
            ref: CategoryExpense
          }],
        monthlyData: [monthSchema],
        dailyData: [daySchema],

    },
    { timestamps: true, toJSON: { getters: true }}
);

const KPI = mongoose.model("KPI", KPISchema)

export default KPI;