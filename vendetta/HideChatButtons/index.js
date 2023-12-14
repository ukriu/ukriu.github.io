"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var metro_1 = require("@vendetta/metro");
var patcher_1 = require("@vendetta/patcher");
var assets_1 = require("@vendetta/ui/assets");
var utils_1 = require("@vendetta/utils");
var ChatInput = (0, metro_1.findByName)("ChatInput");
var unpatch;
exports.default = {
    onLoad: function () {
        var blockList = ["ic_thread_normal_24px", "ic_gift", "ThreadIcon"].map(function (n) { return (0, assets_1.getAssetIDByName)(n); });
        unpatch = (0, patcher_1.after)("render", ChatInput.prototype, function (_, ret) {
            var input = (0, utils_1.findInReactTree)(ret, function (t) { return "forceAnimateButtons" in t.props && t.props.actions; });
            input.props.actions = input.props.actions.filter(function (a) { return !blockList.includes(a.source); });
        });
    },
    onUnload: unpatch
};
