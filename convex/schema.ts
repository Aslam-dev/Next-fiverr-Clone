import < v > from "convex/values";
import {defineSchema, defineTable } from "convex/server";

export default defineSchema({
    users: defineTable({
        fullName: v.string(),
        username: v.string(),
        title: v.string(),
        about : v.string(),
        portfolioUrls: v.options(v.array(v.string())),
        profileImageUrl: v.optional(v.string()),
        favoritedSellerIds: v.optional(v.array(v.string())),
        tokenIdentifier: v.string(),
        customTag: v.optional(v.string()),
        stripeAccountId: v.optional(v.string()),    
        stripeAccountSetupComplete: v.optional(v.boolean()),
    })


});