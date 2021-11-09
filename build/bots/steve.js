"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobId = exports.cronTimer = void 0;
var web_api_1 = require("@slack/web-api");
var isUserOnVacation_1 = __importDefault(require("../lib/isUserOnVacation"));
var pickRandom_1 = __importDefault(require("../lib/pickRandom"));
exports.cronTimer = "0 12 * * Monday";
exports.jobId = "steve";
var client = new web_api_1.WebClient(process.env.STEVE_API_TOKEN);
var sendGroupMessage = function (users) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, ok, channel, error, error_1;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                return [4, client.conversations.open({
                        users: users.join(", "),
                    })];
            case 1:
                _a = _c.sent(), ok = _a.ok, channel = _a.channel, error = _a.error;
                if (!ok)
                    throw error;
                return [4, client.chat.postMessage({
                        blocks: [
                            {
                                type: "section",
                                text: {
                                    type: "mrkdwn",
                                    text: ":portal_orange_parrot: *Hello girls and boys!!* :portal_blue_parrot:",
                                },
                            },
                            {
                                type: "section",
                                text: {
                                    type: "mrkdwn",
                                    text: "I know I seem loud, but don't mind me, I'm just taking a look around 👀",
                                },
                            },
                            {
                                type: "section",
                                text: {
                                    type: "mrkdwn",
                                    text: 'You all have been chosen as our weekly :vercel: holy trinity :vercel:.\n\nThis means you\'re "recommended" (:rage:) to schedule a meeting between yourselves.\n\nShare something, become friends, have a nice sporty threeway boxing :boxing_glove: match, whatever!',
                                },
                            },
                        ],
                        text: ":portal_blue_parrot: *Hello girls and boys!!* :portal_orange_parrot: I know I seem loud, but don't mind me, I'm just taking a look around 👀 You all have been chosen as our weekly :vercel: holy trinity :vercel:.\nThis just means that you are \"recommended\" (do it, or else...) to schedule a meeting between yourselves.\nShare something, become friends, have a nice sporty threeway boxing match, whatever!",
                        channel: channel.id,
                    })];
            case 2:
                (_b = _c.sent(), ok = _b.ok, error = _b.error);
                if (!ok)
                    throw error;
                console.log("steve \uD83E\uDD16 - i'm done yelling at " + users.join(", ") + " (sorry for the boring ids)");
                return [3, 4];
            case 3:
                error_1 = _c.sent();
                console.error(error_1);
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
var pickRandomPeopleFromDifferentGroups = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, ok, error, usergroups, groups, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4, client.usergroups.list({
                        include_disabled: false,
                        include_users: true,
                    })];
            case 1:
                _a = _b.sent(), ok = _a.ok, error = _a.error, usergroups = _a.usergroups;
                if (!ok)
                    throw error;
                groups = (0, pickRandom_1.default)(usergroups, 3);
                return [4, Promise.all(groups.map(function (group) { return __awaiter(void 0, void 0, void 0, function () {
                        var user, userInfo;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    user = (0, pickRandom_1.default)(group.users, 1)[0];
                                    return [4, client.users.info({ user: user })];
                                case 1:
                                    userInfo = _b.sent();
                                    _b.label = 2;
                                case 2:
                                    if (!(!userInfo.ok || (0, isUserOnVacation_1.default)((_a = userInfo.user) === null || _a === void 0 ? void 0 : _a.profile))) return [3, 4];
                                    user = (0, pickRandom_1.default)(group.users, 1)[0];
                                    return [4, client.users.info({ user: user })];
                                case 3:
                                    userInfo = _b.sent();
                                    return [3, 2];
                                case 4: return [2, user];
                            }
                        });
                    }); }))];
            case 2: return [2, _b.sent()];
            case 3:
                error_2 = _b.sent();
                console.error(error_2);
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var selectedPeople;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, pickRandomPeopleFromDifferentGroups()];
            case 1:
                selectedPeople = _a.sent();
                if (selectedPeople === undefined)
                    console.log("steve 🤖 - i wasn't able to yell at people!");
                else {
                    sendGroupMessage(selectedPeople);
                    console.log("steve 🤖 - i'm done yelling at people!");
                }
                return [2];
        }
    });
}); };
exports.default = main;
