"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var ClubHubClient = (function () {
    function ClubHubClient(baseURL, token) {
        var _this = this;
        this.setToken = function (token) {
            _this.token = token;
            _this.axios.defaults.headers.common['Authorization'] = token;
        };
        this.get = function (url, params) {
            var methodName = "[Core Axios (get)] - ";
            return _this.axios.get(url, params).then(function (res) {
                if (!process.env.LOGGER_DISABLED && res.status >= 300) {
                    console.info(methodName + " Request " + url + " returned with status: " + res.status + ".");
                }
                return res;
            });
        };
        this.post = function (url, data, config) {
            var methodName = "[Core Axios (post)] - ";
            return _this.axios.post(url, data, config).then(function (res) {
                if (!process.env.LOGGER_DISABLED && res.status >= 300) {
                    console.info(methodName + " Request " + url + " returned with status: " + res.status + ".");
                }
                return res;
            });
        };
        this.put = function (url, data, config) {
            var methodName = "[Core Axios (put)] - ";
            return _this.axios.put(url, data, config).then(function (res) {
                if (!process.env.LOGGER_DISABLED && res.status >= 300) {
                    console.info(methodName + " Request " + url + " returned with status: " + res.status + ".");
                }
                return res;
            });
        };
        this.delete = function (url, config) {
            var methodName = "[Core Axios (delete)] - ";
            return _this.axios.delete(url, config).then(function (res) {
                if (!process.env.LOGGER_DISABLED && res.status >= 300) {
                    console.info(methodName + " Request " + url + " returned with status: " + res.status + ".");
                }
                return res;
            });
        };
        this.responseHandler = function (response) {
            return response;
        };
        this.errorHandler = function (error) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, error];
            });
        }); };
        this.shouldRetry = true;
        var headers = {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        this.axios = axios_1.default.create({ baseURL: baseURL, headers: headers });
        this.axios.interceptors.response.use(this.responseHandler, this.errorHandler);
        if (token) {
            this.setToken(token);
        }
    }
    return ClubHubClient;
}());
exports.default = ClubHubClient;
