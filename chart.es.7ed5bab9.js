// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jHxYx":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "403723ef7ed5bab9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"cMtA9":[function(require,module,exports) {
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "A", ()=>ye);
parcelHelpers.export(exports, "B", ()=>Me);
parcelHelpers.export(exports, "P", ()=>ve);
parcelHelpers.export(exports, "a", ()=>K);
parcelHelpers.export(exports, "b", ()=>D);
parcelHelpers.export(exports, "c", ()=>I);
parcelHelpers.export(exports, "d", ()=>O);
parcelHelpers.export(exports, "e", ()=>E);
parcelHelpers.export(exports, "f", ()=>Yc);
parcelHelpers.export(exports, "i", ()=>T);
parcelHelpers.export(exports, "m", ()=>ne);
parcelHelpers.export(exports, "r", ()=>Zt);
parcelHelpers.export(exports, "t", ()=>$);
parcelHelpers.export(exports, "v", ()=>C);
function ct() {}
const _o = function() {
    let i = 0;
    return function() {
        return i++;
    };
}();
function T(i) {
    return i === null || typeof i > "u";
}
function z(i) {
    if (Array.isArray && Array.isArray(i)) return !0;
    const t = Object.prototype.toString.call(i);
    return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function D(i) {
    return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
const N = (i)=>(typeof i == "number" || i instanceof Number) && isFinite(+i);
function Q(i, t) {
    return N(i) ? i : t;
}
function C(i, t) {
    return typeof i > "u" ? t : i;
}
const yo = (i, t)=>typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : i / t, an = (i, t)=>typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function I(i, t, e) {
    if (i && typeof i.call == "function") return i.apply(e, t);
}
function E(i, t, e, s) {
    let n, o, r;
    if (z(i)) {
        if (o = i.length, s) for(n = o - 1; n >= 0; n--)t.call(e, i[n], n);
        else for(n = 0; n < o; n++)t.call(e, i[n], n);
    } else if (D(i)) for(r = Object.keys(i), o = r.length, n = 0; n < o; n++)t.call(e, i[r[n]], r[n]);
}
function ze(i, t) {
    let e, s, n, o;
    if (!i || !t || i.length !== t.length) return !1;
    for(e = 0, s = i.length; e < s; ++e)if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
    return !0;
}
function Be(i) {
    if (z(i)) return i.map(Be);
    if (D(i)) {
        const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
        let n = 0;
        for(; n < s; ++n)t[e[n]] = Be(i[e[n]]);
        return t;
    }
    return i;
}
function ln(i) {
    return [
        "__proto__",
        "prototype",
        "constructor"
    ].indexOf(i) === -1;
}
function vo(i, t, e, s) {
    if (!ln(i)) return;
    const n = t[i], o = e[i];
    D(n) && D(o) ? ne(n, o, s) : t[i] = Be(o);
}
function ne(i, t, e) {
    const s = z(t) ? t : [
        t
    ], n = s.length;
    if (!D(i)) return i;
    e = e || {};
    const o = e.merger || vo;
    for(let r = 0; r < n; ++r){
        if (t = s[r], !D(t)) continue;
        const a = Object.keys(t);
        for(let l = 0, c = a.length; l < c; ++l)o(a[l], i, t, e);
    }
    return i;
}
function Qt(i, t) {
    return ne(i, t, {
        merger: Mo
    });
}
function Mo(i, t, e) {
    if (!ln(i)) return;
    const s = t[i], n = e[i];
    D(s) && D(n) ? Qt(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Be(n));
}
const Xi = {
    "": (i)=>i,
    x: (i)=>i.x,
    y: (i)=>i.y
};
function _t(i, t) {
    return (Xi[t] || (Xi[t] = ko(t)))(i);
}
function ko(i) {
    const t = wo(i);
    return (e)=>{
        for (const s of t){
            if (s === "") break;
            e = e && e[s];
        }
        return e;
    };
}
function wo(i) {
    const t = i.split("."), e = [];
    let s = "";
    for (const n of t)s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
    return e;
}
function Oi(i) {
    return i.charAt(0).toUpperCase() + i.slice(1);
}
const et = (i)=>typeof i < "u", yt = (i)=>typeof i == "function", Ui = (i, t)=>{
    if (i.size !== t.size) return !1;
    for (const e of i)if (!t.has(e)) return !1;
    return !0;
};
function So(i) {
    return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const B = Math.PI, F = 2 * B, Po = F + B, Ve = Number.POSITIVE_INFINITY, Co = B / 180, V = B / 2, $t = B / 4, Ki = B * 2 / 3, tt = Math.log10, lt = Math.sign;
function qi(i) {
    const t = Math.round(i);
    i = te(i, t, i / 1e3) ? t : i;
    const e = Math.pow(10, Math.floor(tt(i))), s = i / e;
    return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function Do(i) {
    const t = [], e = Math.sqrt(i);
    let s;
    for(s = 1; s < e; s++)i % s === 0 && (t.push(s), t.push(i / s));
    return e === (e | 0) && t.push(e), t.sort((n, o)=>n - o).pop(), t;
}
function Bt(i) {
    return !isNaN(parseFloat(i)) && isFinite(i);
}
function te(i, t, e) {
    return Math.abs(i - t) < e;
}
function Oo(i, t) {
    const e = Math.round(i);
    return e - t <= i && e + t >= i;
}
function cn(i, t, e) {
    let s, n, o;
    for(s = 0, n = i.length; s < n; s++)o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function nt(i) {
    return i * (B / 180);
}
function Ai(i) {
    return i * (180 / B);
}
function Gi(i) {
    if (!N(i)) return;
    let t = 1, e = 0;
    for(; Math.round(i * t) / t !== i;)t *= 10, e++;
    return e;
}
function hn(i, t) {
    const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
    let o = Math.atan2(s, e);
    return o < -0.5 * B && (o += F), {
        angle: o,
        distance: n
    };
}
function bi(i, t) {
    return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function Ao(i, t) {
    return (i - t + Po) % F - B;
}
function Z(i) {
    return (i % F + F) % F;
}
function oe(i, t, e, s) {
    const n = Z(i), o = Z(t), r = Z(e), a = Z(o - n), l = Z(r - n), c = Z(n - o), h = Z(n - r);
    return n === o || n === r || s && o === r || a > l && c < h;
}
function Y(i, t, e) {
    return Math.max(t, Math.min(e, i));
}
function To(i) {
    return Y(i, -32768, 32767);
}
function ut(i, t, e, s = 1e-6) {
    return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
}
function Ti(i, t, e) {
    e = e || ((r)=>i[r] < t);
    let s = i.length - 1, n = 0, o;
    for(; s - n > 1;)o = n + s >> 1, e(o) ? n = o : s = o;
    return {
        lo: n,
        hi: s
    };
}
const ft = (i, t, e, s)=>Ti(i, e, s ? (n)=>i[n][t] <= e : (n)=>i[n][t] < e), Lo = (i, t, e)=>Ti(i, e, (s)=>i[s][t] >= e);
function Ro(i, t, e) {
    let s = 0, n = i.length;
    for(; s < n && i[s] < t;)s++;
    for(; n > s && i[n - 1] > e;)n--;
    return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const dn = [
    "push",
    "pop",
    "shift",
    "splice",
    "unshift"
];
function Eo(i, t) {
    if (i._chartjs) {
        i._chartjs.listeners.push(t);
        return;
    }
    Object.defineProperty(i, "_chartjs", {
        configurable: !0,
        enumerable: !1,
        value: {
            listeners: [
                t
            ]
        }
    }), dn.forEach((e)=>{
        const s = "_onData" + Oi(e), n = i[e];
        Object.defineProperty(i, e, {
            configurable: !0,
            enumerable: !1,
            value (...o) {
                const r = n.apply(this, o);
                return i._chartjs.listeners.forEach((a)=>{
                    typeof a[s] == "function" && a[s](...o);
                }), r;
            }
        });
    });
}
function Zi(i, t) {
    const e = i._chartjs;
    if (!e) return;
    const s = e.listeners, n = s.indexOf(t);
    n !== -1 && s.splice(n, 1), !(s.length > 0) && (dn.forEach((o)=>{
        delete i[o];
    }), delete i._chartjs);
}
function un(i) {
    const t = /* @__PURE__ */ new Set();
    let e, s;
    for(e = 0, s = i.length; e < s; ++e)t.add(i[e]);
    return t.size === s ? i : Array.from(t);
}
const fn = function() {
    return typeof window > "u" ? function(i) {
        return i();
    } : window.requestAnimationFrame;
}();
function gn(i, t, e) {
    const s = e || ((r)=>Array.prototype.slice.call(r));
    let n = !1, o = [];
    return function(...r) {
        o = s(r), n || (n = !0, fn.call(window, ()=>{
            n = !1, i.apply(t, o);
        }));
    };
}
function Fo(i, t) {
    let e;
    return function(...s) {
        return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
    };
}
const Li = (i)=>i === "start" ? "left" : i === "end" ? "right" : "center", U = (i, t, e)=>i === "start" ? t : i === "end" ? e : (t + e) / 2, Io = (i, t, e, s)=>i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function pn(i, t, e) {
    const s = t.length;
    let n = 0, o = s;
    if (i._sorted) {
        const { iScale: r, _parsed: a } = i, l = r.axis, { min: c, max: h, minDefined: d, maxDefined: u } = r.getUserBounds();
        d && (n = Y(Math.min(ft(a, r.axis, c).lo, e ? s : ft(t, l, r.getPixelForValue(c)).lo), 0, s - 1)), u ? o = Y(Math.max(ft(a, r.axis, h, !0).hi + 1, e ? 0 : ft(t, l, r.getPixelForValue(h), !0).hi + 1), n, s) - n : o = s - n;
    }
    return {
        start: n,
        count: o
    };
}
function mn(i) {
    const { xScale: t, yScale: e, _scaleRanges: s } = i, n = {
        xmin: t.min,
        xmax: t.max,
        ymin: e.min,
        ymax: e.max
    };
    if (!s) return i._scaleRanges = n, !0;
    const o = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== e.min || s.ymax !== e.max;
    return Object.assign(s, n), o;
}
const we = (i)=>i === 0 || i === 1, Ji = (i, t, e)=>-(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * F / e)), Qi = (i, t, e)=>Math.pow(2, -10 * i) * Math.sin((i - t) * F / e) + 1, ee = {
    linear: (i)=>i,
    easeInQuad: (i)=>i * i,
    easeOutQuad: (i)=>-i * (i - 2),
    easeInOutQuad: (i)=>(i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
    easeInCubic: (i)=>i * i * i,
    easeOutCubic: (i)=>(i -= 1) * i * i + 1,
    easeInOutCubic: (i)=>(i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
    easeInQuart: (i)=>i * i * i * i,
    easeOutQuart: (i)=>-((i -= 1) * i * i * i - 1),
    easeInOutQuart: (i)=>(i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
    easeInQuint: (i)=>i * i * i * i * i,
    easeOutQuint: (i)=>(i -= 1) * i * i * i * i + 1,
    easeInOutQuint: (i)=>(i /= 0.5) < 1 ? 0.5 * i * i * i * i * i : 0.5 * ((i -= 2) * i * i * i * i + 2),
    easeInSine: (i)=>-Math.cos(i * V) + 1,
    easeOutSine: (i)=>Math.sin(i * V),
    easeInOutSine: (i)=>-0.5 * (Math.cos(B * i) - 1),
    easeInExpo: (i)=>i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
    easeOutExpo: (i)=>i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
    easeInOutExpo: (i)=>we(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
    easeInCirc: (i)=>i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
    easeOutCirc: (i)=>Math.sqrt(1 - (i -= 1) * i),
    easeInOutCirc: (i)=>(i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
    easeInElastic: (i)=>we(i) ? i : Ji(i, 0.075, 0.3),
    easeOutElastic: (i)=>we(i) ? i : Qi(i, 0.075, 0.3),
    easeInOutElastic (i) {
        return we(i) ? i : i < 0.5 ? 0.5 * Ji(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * Qi(i * 2 - 1, 0.1125, 0.45);
    },
    easeInBack (i) {
        return i * i * (2.70158 * i - 1.70158);
    },
    easeOutBack (i) {
        return (i -= 1) * i * (2.70158 * i + 1.70158) + 1;
    },
    easeInOutBack (i) {
        let t = 1.70158;
        return (i /= 0.5) < 1 ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t)) : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
    },
    easeInBounce: (i)=>1 - ee.easeOutBounce(1 - i),
    easeOutBounce (i) {
        return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
    },
    easeInOutBounce: (i)=>i < 0.5 ? ee.easeInBounce(i * 2) * 0.5 : ee.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */ function he(i) {
    return i + 0.5 | 0;
}
const mt = (i, t, e)=>Math.max(Math.min(i, e), t);
function Gt(i) {
    return mt(he(i * 2.55), 0, 255);
}
function xt(i) {
    return mt(he(i * 255), 0, 255);
}
function dt(i) {
    return mt(he(i / 2.55) / 100, 0, 1);
}
function ts(i) {
    return mt(he(i * 100), 0, 100);
}
const J = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
}, xi = [
    ..."0123456789ABCDEF"
], zo = (i)=>xi[i & 15], Bo = (i)=>xi[(i & 240) >> 4] + xi[i & 15], Se = (i)=>(i & 240) >> 4 === (i & 15), Vo = (i)=>Se(i.r) && Se(i.g) && Se(i.b) && Se(i.a);
function Wo(i) {
    var t = i.length, e;
    return i[0] === "#" && (t === 4 || t === 5 ? e = {
        r: 255 & J[i[1]] * 17,
        g: 255 & J[i[2]] * 17,
        b: 255 & J[i[3]] * 17,
        a: t === 5 ? J[i[4]] * 17 : 255
    } : (t === 7 || t === 9) && (e = {
        r: J[i[1]] << 4 | J[i[2]],
        g: J[i[3]] << 4 | J[i[4]],
        b: J[i[5]] << 4 | J[i[6]],
        a: t === 9 ? J[i[7]] << 4 | J[i[8]] : 255
    })), e;
}
const No = (i, t)=>i < 255 ? t(i) : "";
function Ho(i) {
    var t = Vo(i) ? zo : Bo;
    return i ? "#" + t(i.r) + t(i.g) + t(i.b) + No(i.a, t) : void 0;
}
const jo = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function bn(i, t, e) {
    const s = t * Math.min(e, 1 - e), n = (o, r = (o + i / 30) % 12)=>e - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
    return [
        n(0),
        n(8),
        n(4)
    ];
}
function $o(i, t, e) {
    const s = (n, o = (n + i / 60) % 6)=>e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
    return [
        s(5),
        s(3),
        s(1)
    ];
}
function Yo(i, t, e) {
    const s = bn(i, 1, 0.5);
    let n;
    for(t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)s[n] *= 1 - t - e, s[n] += t;
    return s;
}
function Xo(i, t, e, s, n) {
    return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
}
function Ri(i) {
    const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), r = Math.min(e, s, n), a = (o + r) / 2;
    let l, c, h;
    return o !== r && (h = o - r, c = a > 0.5 ? h / (2 - o - r) : h / (o + r), l = Xo(e, s, n, h, o), l = l * 60 + 0.5), [
        l | 0,
        c || 0,
        a
    ];
}
function Ei(i, t, e, s) {
    return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(xt);
}
function Fi(i, t, e) {
    return Ei(bn, i, t, e);
}
function Uo(i, t, e) {
    return Ei(Yo, i, t, e);
}
function Ko(i, t, e) {
    return Ei($o, i, t, e);
}
function xn(i) {
    return (i % 360 + 360) % 360;
}
function qo(i) {
    const t = jo.exec(i);
    let e = 255, s;
    if (!t) return;
    t[5] !== s && (e = t[6] ? Gt(+t[5]) : xt(+t[5]));
    const n = xn(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
    return t[1] === "hwb" ? s = Uo(n, o, r) : t[1] === "hsv" ? s = Ko(n, o, r) : s = Fi(n, o, r), {
        r: s[0],
        g: s[1],
        b: s[2],
        a: e
    };
}
function Go(i, t) {
    var e = Ri(i);
    e[0] = xn(e[0] + t), e = Fi(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function Zo(i) {
    if (!i) return;
    const t = Ri(i), e = t[0], s = ts(t[1]), n = ts(t[2]);
    return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${dt(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
}
const es = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh"
}, is = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32"
};
function Jo() {
    const i = {}, t = Object.keys(is), e = Object.keys(es);
    let s, n, o, r, a;
    for(s = 0; s < t.length; s++){
        for(r = a = t[s], n = 0; n < e.length; n++)o = e[n], a = a.replace(o, es[o]);
        o = parseInt(is[r], 16), i[a] = [
            o >> 16 & 255,
            o >> 8 & 255,
            o & 255
        ];
    }
    return i;
}
let Pe;
function Qo(i) {
    Pe || (Pe = Jo(), Pe.transparent = [
        0,
        0,
        0,
        0
    ]);
    const t = Pe[i.toLowerCase()];
    return t && {
        r: t[0],
        g: t[1],
        b: t[2],
        a: t.length === 4 ? t[3] : 255
    };
}
const tr = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function er(i) {
    const t = tr.exec(i);
    let e = 255, s, n, o;
    if (t) {
        if (t[7] !== s) {
            const r = +t[7];
            e = t[8] ? Gt(r) : mt(r * 255, 0, 255);
        }
        return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? Gt(s) : mt(s, 0, 255)), n = 255 & (t[4] ? Gt(n) : mt(n, 0, 255)), o = 255 & (t[6] ? Gt(o) : mt(o, 0, 255)), {
            r: s,
            g: n,
            b: o,
            a: e
        };
    }
}
function ir(i) {
    return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${dt(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const ni = (i)=>i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, Ft = (i)=>i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function sr(i, t, e) {
    const s = Ft(dt(i.r)), n = Ft(dt(i.g)), o = Ft(dt(i.b));
    return {
        r: xt(ni(s + e * (Ft(dt(t.r)) - s))),
        g: xt(ni(n + e * (Ft(dt(t.g)) - n))),
        b: xt(ni(o + e * (Ft(dt(t.b)) - o))),
        a: i.a + e * (t.a - i.a)
    };
}
function Ce(i, t, e) {
    if (i) {
        let s = Ri(i);
        s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Fi(s), i.r = s[0], i.g = s[1], i.b = s[2];
    }
}
function _n(i, t) {
    return i && Object.assign(t || {}, i);
}
function ss(i) {
    var t = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    };
    return Array.isArray(i) ? i.length >= 3 && (t = {
        r: i[0],
        g: i[1],
        b: i[2],
        a: 255
    }, i.length > 3 && (t.a = xt(i[3]))) : (t = _n(i, {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    }), t.a = xt(t.a)), t;
}
function nr(i) {
    return i.charAt(0) === "r" ? er(i) : qo(i);
}
class We {
    constructor(t){
        if (t instanceof We) return t;
        const e = typeof t;
        let s;
        e === "object" ? s = ss(t) : e === "string" && (s = Wo(t) || Qo(t) || nr(t)), this._rgb = s, this._valid = !!s;
    }
    get valid() {
        return this._valid;
    }
    get rgb() {
        var t = _n(this._rgb);
        return t && (t.a = dt(t.a)), t;
    }
    set rgb(t) {
        this._rgb = ss(t);
    }
    rgbString() {
        return this._valid ? ir(this._rgb) : void 0;
    }
    hexString() {
        return this._valid ? Ho(this._rgb) : void 0;
    }
    hslString() {
        return this._valid ? Zo(this._rgb) : void 0;
    }
    mix(t, e) {
        if (t) {
            const s = this.rgb, n = t.rgb;
            let o;
            const r = e === o ? 0.5 : e, a = 2 * r - 1, l = s.a - n.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
            o = 1 - c, s.r = 255 & c * s.r + o * n.r + 0.5, s.g = 255 & c * s.g + o * n.g + 0.5, s.b = 255 & c * s.b + o * n.b + 0.5, s.a = r * s.a + (1 - r) * n.a, this.rgb = s;
        }
        return this;
    }
    interpolate(t, e) {
        return t && (this._rgb = sr(this._rgb, t._rgb, e)), this;
    }
    clone() {
        return new We(this.rgb);
    }
    alpha(t) {
        return this._rgb.a = xt(t), this;
    }
    clearer(t) {
        const e = this._rgb;
        return e.a *= 1 - t, this;
    }
    greyscale() {
        const t = this._rgb, e = he(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
        return t.r = t.g = t.b = e, this;
    }
    opaquer(t) {
        const e = this._rgb;
        return e.a *= 1 + t, this;
    }
    negate() {
        const t = this._rgb;
        return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
    }
    lighten(t) {
        return Ce(this._rgb, 2, t), this;
    }
    darken(t) {
        return Ce(this._rgb, 2, -t), this;
    }
    saturate(t) {
        return Ce(this._rgb, 1, t), this;
    }
    desaturate(t) {
        return Ce(this._rgb, 1, -t), this;
    }
    rotate(t) {
        return Go(this._rgb, t), this;
    }
}
function yn(i) {
    return new We(i);
}
function vn(i) {
    if (i && typeof i == "object") {
        const t = i.toString();
        return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
    }
    return !1;
}
function ns(i) {
    return vn(i) ? i : yn(i);
}
function oi(i) {
    return vn(i) ? i : yn(i).saturate(0.5).darken(0.1).hexString();
}
const At = /* @__PURE__ */ Object.create(null), _i = /* @__PURE__ */ Object.create(null);
function ie(i, t) {
    if (!t) return i;
    const e = t.split(".");
    for(let s = 0, n = e.length; s < n; ++s){
        const o = e[s];
        i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
    }
    return i;
}
function ri(i, t, e) {
    return typeof t == "string" ? ne(ie(i, t), e) : ne(ie(i, ""), t);
}
class or {
    constructor(t){
        this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (e)=>e.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
            "mousemove",
            "mouseout",
            "click",
            "touchstart",
            "touchmove"
        ], this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: "normal",
            lineHeight: 1.2,
            weight: null
        }, this.hover = {}, this.hoverBackgroundColor = (e, s)=>oi(s.backgroundColor), this.hoverBorderColor = (e, s)=>oi(s.borderColor), this.hoverColor = (e, s)=>oi(s.color), this.indexAxis = "x", this.interaction = {
            mode: "nearest",
            intersect: !0,
            includeInvisible: !1
        }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t);
    }
    set(t, e) {
        return ri(this, t, e);
    }
    get(t) {
        return ie(this, t);
    }
    describe(t, e) {
        return ri(_i, t, e);
    }
    override(t, e) {
        return ri(At, t, e);
    }
    route(t, e, s, n) {
        const o = ie(this, t), r = ie(this, s), a = "_" + e;
        Object.defineProperties(o, {
            [a]: {
                value: o[e],
                writable: !0
            },
            [e]: {
                enumerable: !0,
                get () {
                    const l = this[a], c = r[n];
                    return D(l) ? Object.assign({}, c, l) : C(l, c);
                },
                set (l) {
                    this[a] = l;
                }
            }
        });
    }
}
var O = new or({
    _scriptable: (i)=>!i.startsWith("on"),
    _indexable: (i)=>i !== "events",
    hover: {
        _fallback: "interaction"
    },
    interaction: {
        _scriptable: !1,
        _indexable: !1
    }
});
function rr(i) {
    return !i || T(i.size) || T(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function Ne(i, t, e, s, n) {
    let o = t[n];
    return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function ar(i, t, e, s) {
    s = s || {};
    let n = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
    s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
    let r = 0;
    const a = e.length;
    let l, c, h, d, u;
    for(l = 0; l < a; l++)if (d = e[l], d != null && z(d) !== !0) r = Ne(i, n, o, r, d);
    else if (z(d)) for(c = 0, h = d.length; c < h; c++)u = d[c], u != null && !z(u) && (r = Ne(i, n, o, r, u));
    i.restore();
    const f = o.length / 2;
    if (f > e.length) {
        for(l = 0; l < f; l++)delete n[o[l]];
        o.splice(0, f);
    }
    return r;
}
function wt(i, t, e) {
    const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
    return Math.round((t - n) * s) / s + n;
}
function os(i, t) {
    t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore();
}
function yi(i, t, e, s) {
    Mn(i, t, e, s, null);
}
function Mn(i, t, e, s, n) {
    let o, r, a, l, c, h;
    const d = t.pointStyle, u = t.rotation, f = t.radius;
    let g = (u || 0) * Co;
    if (d && typeof d == "object" && (o = d.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
        i.save(), i.translate(e, s), i.rotate(g), i.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height), i.restore();
        return;
    }
    if (!(isNaN(f) || f <= 0)) {
        switch(i.beginPath(), d){
            default:
                n ? i.ellipse(e, s, n / 2, f, 0, 0, F) : i.arc(e, s, f, 0, F), i.closePath();
                break;
            case "triangle":
                i.moveTo(e + Math.sin(g) * f, s - Math.cos(g) * f), g += Ki, i.lineTo(e + Math.sin(g) * f, s - Math.cos(g) * f), g += Ki, i.lineTo(e + Math.sin(g) * f, s - Math.cos(g) * f), i.closePath();
                break;
            case "rectRounded":
                c = f * 0.516, l = f - c, r = Math.cos(g + $t) * l, a = Math.sin(g + $t) * l, i.arc(e - r, s - a, c, g - B, g - V), i.arc(e + a, s - r, c, g - V, g), i.arc(e + r, s + a, c, g, g + V), i.arc(e - a, s + r, c, g + V, g + B), i.closePath();
                break;
            case "rect":
                if (!u) {
                    l = Math.SQRT1_2 * f, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
                    break;
                }
                g += $t;
            case "rectRot":
                r = Math.cos(g) * f, a = Math.sin(g) * f, i.moveTo(e - r, s - a), i.lineTo(e + a, s - r), i.lineTo(e + r, s + a), i.lineTo(e - a, s + r), i.closePath();
                break;
            case "crossRot":
                g += $t;
            case "cross":
                r = Math.cos(g) * f, a = Math.sin(g) * f, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a), i.moveTo(e + a, s - r), i.lineTo(e - a, s + r);
                break;
            case "star":
                r = Math.cos(g) * f, a = Math.sin(g) * f, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a), i.moveTo(e + a, s - r), i.lineTo(e - a, s + r), g += $t, r = Math.cos(g) * f, a = Math.sin(g) * f, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a), i.moveTo(e + a, s - r), i.lineTo(e - a, s + r);
                break;
            case "line":
                r = n ? n / 2 : Math.cos(g) * f, a = Math.sin(g) * f, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a);
                break;
            case "dash":
                i.moveTo(e, s), i.lineTo(e + Math.cos(g) * f, s + Math.sin(g) * f);
                break;
        }
        i.fill(), t.borderWidth > 0 && i.stroke();
    }
}
function re(i, t, e) {
    return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function Xe(i, t) {
    i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function Ue(i) {
    i.restore();
}
function lr(i, t, e, s, n) {
    if (!t) return i.lineTo(e.x, e.y);
    if (n === "middle") {
        const o = (t.x + e.x) / 2;
        i.lineTo(o, t.y), i.lineTo(o, e.y);
    } else n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
    i.lineTo(e.x, e.y);
}
function cr(i, t, e, s) {
    if (!t) return i.lineTo(e.x, e.y);
    i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
}
function Tt(i, t, e, s, n, o = {}) {
    const r = z(t) ? t : [
        t
    ], a = o.strokeWidth > 0 && o.strokeColor !== "";
    let l, c;
    for(i.save(), i.font = n.string, hr(i, o), l = 0; l < r.length; ++l)c = r[l], a && (o.strokeColor && (i.strokeStyle = o.strokeColor), T(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), dr(i, e, s, c, o), s += n.lineHeight;
    i.restore();
}
function hr(i, t) {
    t.translation && i.translate(t.translation[0], t.translation[1]), T(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function dr(i, t, e, s, n) {
    if (n.strikethrough || n.underline) {
        const o = i.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = n.strikethrough ? (l + c) / 2 : c;
        i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(r, h), i.lineTo(a, h), i.stroke();
    }
}
function ae(i, t) {
    const { x: e, y: s, w: n, h: o, radius: r } = t;
    i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, -V, B, !0), i.lineTo(e, s + o - r.bottomLeft), i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, B, V, !0), i.lineTo(e + n - r.bottomRight, s + o), i.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, V, 0, !0), i.lineTo(e + n, s + r.topRight), i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -V, !0), i.lineTo(e + r.topLeft, s);
}
const ur = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/), fr = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);
function gr(i, t) {
    const e = ("" + i).match(ur);
    if (!e || e[1] === "normal") return t * 1.2;
    switch(i = +e[2], e[3]){
        case "px":
            return i;
        case "%":
            i /= 100;
            break;
    }
    return t * i;
}
const pr = (i)=>+i || 0;
function Ii(i, t) {
    const e = {}, s = D(t), n = s ? Object.keys(t) : t, o = D(i) ? s ? (r)=>C(i[r], i[t[r]]) : (r)=>i[r] : ()=>i;
    for (const r of n)e[r] = pr(o(r));
    return e;
}
function kn(i) {
    return Ii(i, {
        top: "y",
        right: "x",
        bottom: "y",
        left: "x"
    });
}
function Dt(i) {
    return Ii(i, [
        "topLeft",
        "topRight",
        "bottomLeft",
        "bottomRight"
    ]);
}
function K(i) {
    const t = kn(i);
    return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function $(i, t) {
    i = i || {}, t = t || O.font;
    let e = C(i.size, t.size);
    typeof e == "string" && (e = parseInt(e, 10));
    let s = C(i.style, t.style);
    s && !("" + s).match(fr) && (console.warn('Invalid font style specified: "' + s + '"'), s = "");
    const n = {
        family: C(i.family, t.family),
        lineHeight: gr(C(i.lineHeight, t.lineHeight), e),
        size: e,
        style: s,
        weight: C(i.weight, t.weight),
        string: ""
    };
    return n.string = rr(n), n;
}
function Zt(i, t, e, s) {
    let n = !0, o, r, a;
    for(o = 0, r = i.length; o < r; ++o)if (a = i[o], a !== void 0 && (t !== void 0 && typeof a == "function" && (a = a(t), n = !1), e !== void 0 && z(a) && (a = a[e % a.length], n = !1), a !== void 0)) return s && !n && (s.cacheable = !1), a;
}
function mr(i, t, e) {
    const { min: s, max: n } = i, o = an(t, (n - s) / 2), r = (a, l)=>e && a === 0 ? 0 : a + l;
    return {
        min: r(s, -Math.abs(o)),
        max: r(n, o)
    };
}
function vt(i, t) {
    return Object.assign(Object.create(i), t);
}
function zi(i, t = [
    ""
], e = i, s, n = ()=>i[0]) {
    et(s) || (s = Cn("_fallback", i));
    const o = {
        [Symbol.toStringTag]: "Object",
        _cacheable: !0,
        _scopes: i,
        _rootScopes: e,
        _fallback: s,
        _getTarget: n,
        override: (r)=>zi([
                r,
                ...i
            ], t, e, s)
    };
    return new Proxy(o, {
        deleteProperty (r, a) {
            return delete r[a], delete r._keys, delete i[0][a], !0;
        },
        get (r, a) {
            return Sn(r, a, ()=>wr(a, t, i, r));
        },
        getOwnPropertyDescriptor (r, a) {
            return Reflect.getOwnPropertyDescriptor(r._scopes[0], a);
        },
        getPrototypeOf () {
            return Reflect.getPrototypeOf(i[0]);
        },
        has (r, a) {
            return as(r).includes(a);
        },
        ownKeys (r) {
            return as(r);
        },
        set (r, a, l) {
            const c = r._storage || (r._storage = n());
            return r[a] = c[a] = l, delete r._keys, !0;
        }
    });
}
function Vt(i, t, e, s) {
    const n = {
        _cacheable: !1,
        _proxy: i,
        _context: t,
        _subProxy: e,
        _stack: /* @__PURE__ */ new Set(),
        _descriptors: wn(i, s),
        setContext: (o)=>Vt(i, o, e, s),
        override: (o)=>Vt(i.override(o), t, e, s)
    };
    return new Proxy(n, {
        deleteProperty (o, r) {
            return delete o[r], delete i[r], !0;
        },
        get (o, r, a) {
            return Sn(o, r, ()=>xr(o, r, a));
        },
        getOwnPropertyDescriptor (o, r) {
            return o._descriptors.allKeys ? Reflect.has(i, r) ? {
                enumerable: !0,
                configurable: !0
            } : void 0 : Reflect.getOwnPropertyDescriptor(i, r);
        },
        getPrototypeOf () {
            return Reflect.getPrototypeOf(i);
        },
        has (o, r) {
            return Reflect.has(i, r);
        },
        ownKeys () {
            return Reflect.ownKeys(i);
        },
        set (o, r, a) {
            return i[r] = a, delete o[r], !0;
        }
    });
}
function wn(i, t = {
    scriptable: !0,
    indexable: !0
}) {
    const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
    return {
        allKeys: n,
        scriptable: e,
        indexable: s,
        isScriptable: yt(e) ? e : ()=>e,
        isIndexable: yt(s) ? s : ()=>s
    };
}
const br = (i, t)=>i ? i + Oi(t) : t, Bi = (i, t)=>D(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Sn(i, t, e) {
    if (Object.prototype.hasOwnProperty.call(i, t)) return i[t];
    const s = e();
    return i[t] = s, s;
}
function xr(i, t, e) {
    const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = i;
    let a = s[t];
    return yt(a) && r.isScriptable(t) && (a = _r(t, a, i, e)), z(a) && a.length && (a = yr(t, a, i, r.isIndexable)), Bi(t, a) && (a = Vt(a, n, o && o[t], r)), a;
}
function _r(i, t, e, s) {
    const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
    if (a.has(i)) throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
    return a.add(i), t = t(o, r || s), a.delete(i), Bi(i, t) && (t = Vi(n._scopes, n, i, t)), t;
}
function yr(i, t, e, s) {
    const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
    if (et(o.index) && s(i)) t = t[o.index % t.length];
    else if (D(t[0])) {
        const l = t, c = n._scopes.filter((h)=>h !== l);
        t = [];
        for (const h of l){
            const d = Vi(c, n, i, h);
            t.push(Vt(d, o, r && r[i], a));
        }
    }
    return t;
}
function Pn(i, t, e) {
    return yt(i) ? i(t, e) : i;
}
const vr = (i, t)=>i === !0 ? t : typeof i == "string" ? _t(t, i) : void 0;
function Mr(i, t, e, s, n) {
    for (const o of t){
        const r = vr(e, o);
        if (r) {
            i.add(r);
            const a = Pn(r._fallback, e, n);
            if (et(a) && a !== e && a !== s) return a;
        } else if (r === !1 && et(s) && e !== s) return null;
    }
    return !1;
}
function Vi(i, t, e, s) {
    const n = t._rootScopes, o = Pn(t._fallback, e, s), r = [
        ...i,
        ...n
    ], a = /* @__PURE__ */ new Set();
    a.add(s);
    let l = rs(a, r, e, o || e, s);
    return l === null || et(o) && o !== e && (l = rs(a, r, o, l, s), l === null) ? !1 : zi(Array.from(a), [
        ""
    ], n, o, ()=>kr(t, e, s));
}
function rs(i, t, e, s, n) {
    for(; e;)e = Mr(i, t, e, s, n);
    return e;
}
function kr(i, t, e) {
    const s = i._getTarget();
    t in s || (s[t] = {});
    const n = s[t];
    return z(n) && D(e) ? e : n;
}
function wr(i, t, e, s) {
    let n;
    for (const o of t)if (n = Cn(br(o, i), e), et(n)) return Bi(i, n) ? Vi(e, s, i, n) : n;
}
function Cn(i, t) {
    for (const e of t){
        if (!e) continue;
        const s = e[i];
        if (et(s)) return s;
    }
}
function as(i) {
    let t = i._keys;
    return t || (t = i._keys = Sr(i._scopes)), t;
}
function Sr(i) {
    const t = /* @__PURE__ */ new Set();
    for (const e of i)for (const s of Object.keys(e).filter((n)=>!n.startsWith("_")))t.add(s);
    return Array.from(t);
}
function Dn(i, t, e, s) {
    const { iScale: n } = i, { key: o = "r" } = this._parsing, r = new Array(s);
    let a, l, c, h;
    for(a = 0, l = s; a < l; ++a)c = a + e, h = t[c], r[a] = {
        r: n.parse(_t(h, o), c)
    };
    return r;
}
const Pr = Number.EPSILON || 1e-14, Wt = (i, t)=>t < i.length && !i[t].skip && i[t], On = (i)=>i === "x" ? "y" : "x";
function Cr(i, t, e, s) {
    const n = i.skip ? t : i, o = t, r = e.skip ? t : e, a = bi(o, n), l = bi(r, o);
    let c = a / (a + l), h = l / (a + l);
    c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
    const d = s * c, u = s * h;
    return {
        previous: {
            x: o.x - d * (r.x - n.x),
            y: o.y - d * (r.y - n.y)
        },
        next: {
            x: o.x + u * (r.x - n.x),
            y: o.y + u * (r.y - n.y)
        }
    };
}
function Dr(i, t, e) {
    const s = i.length;
    let n, o, r, a, l, c = Wt(i, 0);
    for(let h = 0; h < s - 1; ++h)if (l = c, c = Wt(i, h + 1), !(!l || !c)) {
        if (te(t[h], 0, Pr)) {
            e[h] = e[h + 1] = 0;
            continue;
        }
        n = e[h] / t[h], o = e[h + 1] / t[h], a = Math.pow(n, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[h] = n * r * t[h], e[h + 1] = o * r * t[h]);
    }
}
function Or(i, t, e = "x") {
    const s = On(e), n = i.length;
    let o, r, a, l = Wt(i, 0);
    for(let c = 0; c < n; ++c){
        if (r = a, a = l, l = Wt(i, c + 1), !a) continue;
        const h = a[e], d = a[s];
        r && (o = (h - r[e]) / 3, a[`cp1${e}`] = h - o, a[`cp1${s}`] = d - o * t[c]), l && (o = (l[e] - h) / 3, a[`cp2${e}`] = h + o, a[`cp2${s}`] = d + o * t[c]);
    }
}
function Ar(i, t = "x") {
    const e = On(t), s = i.length, n = Array(s).fill(0), o = Array(s);
    let r, a, l, c = Wt(i, 0);
    for(r = 0; r < s; ++r)if (a = l, l = c, c = Wt(i, r + 1), !!l) {
        if (c) {
            const h = c[t] - l[t];
            n[r] = h !== 0 ? (c[e] - l[e]) / h : 0;
        }
        o[r] = a ? c ? lt(n[r - 1]) !== lt(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r];
    }
    Dr(i, n, o), Or(i, o, t);
}
function De(i, t, e) {
    return Math.max(Math.min(i, e), t);
}
function Tr(i, t) {
    let e, s, n, o, r, a = re(i[0], t);
    for(e = 0, s = i.length; e < s; ++e)r = o, o = a, a = e < s - 1 && re(i[e + 1], t), o && (n = i[e], r && (n.cp1x = De(n.cp1x, t.left, t.right), n.cp1y = De(n.cp1y, t.top, t.bottom)), a && (n.cp2x = De(n.cp2x, t.left, t.right), n.cp2y = De(n.cp2y, t.top, t.bottom)));
}
function Lr(i, t, e, s, n) {
    let o, r, a, l;
    if (t.spanGaps && (i = i.filter((c)=>!c.skip)), t.cubicInterpolationMode === "monotone") Ar(i, n);
    else {
        let c = s ? i[i.length - 1] : i[0];
        for(o = 0, r = i.length; o < r; ++o)a = i[o], l = Cr(c, a, i[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
    }
    t.capBezierPoints && Tr(i, e);
}
function An() {
    return typeof window < "u" && typeof document < "u";
}
function Wi(i) {
    let t = i.parentNode;
    return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function He(i, t, e) {
    let s;
    return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
const Ke = (i)=>window.getComputedStyle(i, null);
function Rr(i, t) {
    return Ke(i).getPropertyValue(t);
}
const Er = [
    "top",
    "right",
    "bottom",
    "left"
];
function Ot(i, t, e) {
    const s = {};
    e = e ? "-" + e : "";
    for(let n = 0; n < 4; n++){
        const o = Er[n];
        s[o] = parseFloat(i[t + "-" + o + e]) || 0;
    }
    return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const Fr = (i, t, e)=>(i > 0 || t > 0) && (!e || !e.shadowRoot);
function Ir(i, t) {
    const e = i.touches, s = e && e.length ? e[0] : i, { offsetX: n, offsetY: o } = s;
    let r = !1, a, l;
    if (Fr(n, o, i.target)) a = n, l = o;
    else {
        const c = t.getBoundingClientRect();
        a = s.clientX - c.left, l = s.clientY - c.top, r = !0;
    }
    return {
        x: a,
        y: l,
        box: r
    };
}
function Pt(i, t) {
    if ("native" in i) return i;
    const { canvas: e, currentDevicePixelRatio: s } = t, n = Ke(e), o = n.boxSizing === "border-box", r = Ot(n, "padding"), a = Ot(n, "border", "width"), { x: l, y: c, box: h } = Ir(i, e), d = r.left + (h && a.left), u = r.top + (h && a.top);
    let { width: f, height: g } = t;
    return o && (f -= r.width + a.width, g -= r.height + a.height), {
        x: Math.round((l - d) / f * e.width / s),
        y: Math.round((c - u) / g * e.height / s)
    };
}
function zr(i, t, e) {
    let s, n;
    if (t === void 0 || e === void 0) {
        const o = Wi(i);
        if (!o) t = i.clientWidth, e = i.clientHeight;
        else {
            const r = o.getBoundingClientRect(), a = Ke(o), l = Ot(a, "border", "width"), c = Ot(a, "padding");
            t = r.width - c.width - l.width, e = r.height - c.height - l.height, s = He(a.maxWidth, o, "clientWidth"), n = He(a.maxHeight, o, "clientHeight");
        }
    }
    return {
        width: t,
        height: e,
        maxWidth: s || Ve,
        maxHeight: n || Ve
    };
}
const ai = (i)=>Math.round(i * 10) / 10;
function Br(i, t, e, s) {
    const n = Ke(i), o = Ot(n, "margin"), r = He(n.maxWidth, i, "clientWidth") || Ve, a = He(n.maxHeight, i, "clientHeight") || Ve, l = zr(i, t, e);
    let { width: c, height: h } = l;
    if (n.boxSizing === "content-box") {
        const d = Ot(n, "border", "width"), u = Ot(n, "padding");
        c -= u.width + d.width, h -= u.height + d.height;
    }
    return c = Math.max(0, c - o.width), h = Math.max(0, s ? Math.floor(c / s) : h - o.height), c = ai(Math.min(c, r, l.maxWidth)), h = ai(Math.min(h, a, l.maxHeight)), c && !h && (h = ai(c / 2)), {
        width: c,
        height: h
    };
}
function ls(i, t, e) {
    const s = t || 1, n = Math.floor(i.height * s), o = Math.floor(i.width * s);
    i.height = n / s, i.width = o / s;
    const r = i.canvas;
    return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${i.height}px`, r.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || r.height !== n || r.width !== o ? (i.currentDevicePixelRatio = s, r.height = n, r.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const Vr = function() {
    let i = !1;
    try {
        const t = {
            get passive () {
                return i = !0, !1;
            }
        };
        window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
    } catch  {}
    return i;
}();
function cs(i, t) {
    const e = Rr(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
    return s ? +s[1] : void 0;
}
function Ct(i, t, e, s) {
    return {
        x: i.x + e * (t.x - i.x),
        y: i.y + e * (t.y - i.y)
    };
}
function Wr(i, t, e, s) {
    return {
        x: i.x + e * (t.x - i.x),
        y: s === "middle" ? e < 0.5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
    };
}
function Nr(i, t, e, s) {
    const n = {
        x: i.cp2x,
        y: i.cp2y
    }, o = {
        x: t.cp1x,
        y: t.cp1y
    }, r = Ct(i, n, e), a = Ct(n, o, e), l = Ct(o, t, e), c = Ct(r, a, e), h = Ct(a, l, e);
    return Ct(c, h, e);
}
const hs = /* @__PURE__ */ new Map();
function Hr(i, t) {
    t = t || {};
    const e = i + JSON.stringify(t);
    let s = hs.get(e);
    return s || (s = new Intl.NumberFormat(i, t), hs.set(e, s)), s;
}
function de(i, t, e) {
    return Hr(t, e).format(i);
}
const jr = function(i, t) {
    return {
        x (e) {
            return i + i + t - e;
        },
        setWidth (e) {
            t = e;
        },
        textAlign (e) {
            return e === "center" ? e : e === "right" ? "left" : "right";
        },
        xPlus (e, s) {
            return e - s;
        },
        leftForLtr (e, s) {
            return e - s;
        }
    };
}, $r = function() {
    return {
        x (i) {
            return i;
        },
        setWidth (i) {},
        textAlign (i) {
            return i;
        },
        xPlus (i, t) {
            return i + t;
        },
        leftForLtr (i, t) {
            return i;
        }
    };
};
function zt(i, t, e) {
    return i ? jr(t, e) : $r();
}
function Tn(i, t) {
    let e, s;
    (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
        e.getPropertyValue("direction"),
        e.getPropertyPriority("direction")
    ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function Ln(i, t) {
    t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function Rn(i) {
    return i === "angle" ? {
        between: oe,
        compare: Ao,
        normalize: Z
    } : {
        between: ut,
        compare: (t, e)=>t - e,
        normalize: (t)=>t
    };
}
function ds({ start: i, end: t, count: e, loop: s, style: n }) {
    return {
        start: i % e,
        end: t % e,
        loop: s && (t - i + 1) % e === 0,
        style: n
    };
}
function Yr(i, t, e) {
    const { property: s, start: n, end: o } = e, { between: r, normalize: a } = Rn(s), l = t.length;
    let { start: c, end: h, loop: d } = i, u, f;
    if (d) {
        for(c += l, h += l, u = 0, f = l; u < f && r(a(t[c % l][s]), n, o); ++u)c--, h--;
        c %= l, h %= l;
    }
    return h < c && (h += l), {
        start: c,
        end: h,
        loop: d,
        style: i.style
    };
}
function En(i, t, e) {
    if (!e) return [
        i
    ];
    const { property: s, start: n, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = Rn(s), { start: h, end: d, loop: u, style: f } = Yr(i, t, e), g = [];
    let p = !1, m = null, b, x, v;
    const y = ()=>l(n, v, b) && a(n, v) !== 0, _ = ()=>a(o, b) === 0 || l(o, v, b), M = ()=>p || y(), k = ()=>!p || _();
    for(let S = h, w = h; S <= d; ++S)x = t[S % r], !x.skip && (b = c(x[s]), b !== v && (p = l(b, n, o), m === null && M() && (m = a(b, n) === 0 ? S : w), m !== null && k() && (g.push(ds({
        start: m,
        end: S,
        loop: u,
        count: r,
        style: f
    })), m = null), w = S, v = b));
    return m !== null && g.push(ds({
        start: m,
        end: d,
        loop: u,
        count: r,
        style: f
    })), g;
}
function Fn(i, t) {
    const e = [], s = i.segments;
    for(let n = 0; n < s.length; n++){
        const o = En(s[n], i.points, t);
        o.length && e.push(...o);
    }
    return e;
}
function Xr(i, t, e, s) {
    let n = 0, o = t - 1;
    if (e && !s) for(; n < t && !i[n].skip;)n++;
    for(; n < t && i[n].skip;)n++;
    for(n %= t, e && (o += n); o > n && i[o % t].skip;)o--;
    return o %= t, {
        start: n,
        end: o
    };
}
function Ur(i, t, e, s) {
    const n = i.length, o = [];
    let r = t, a = i[t], l;
    for(l = t + 1; l <= e; ++l){
        const c = i[l % n];
        c.skip || c.stop ? a.skip || (s = !1, o.push({
            start: t % n,
            end: (l - 1) % n,
            loop: s
        }), t = r = c.stop ? l : null) : (r = l, a.skip && (t = l)), a = c;
    }
    return r !== null && o.push({
        start: t % n,
        end: r % n,
        loop: s
    }), o;
}
function Kr(i, t) {
    const e = i.points, s = i.options.spanGaps, n = e.length;
    if (!n) return [];
    const o = !!i._loop, { start: r, end: a } = Xr(e, n, o, s);
    if (s === !0) return us(i, [
        {
            start: r,
            end: a,
            loop: o
        }
    ], e, t);
    const l = a < r ? a + n : a, c = !!i._fullLoop && r === 0 && a === n - 1;
    return us(i, Ur(e, r, l, c), e, t);
}
function us(i, t, e, s) {
    return !s || !s.setContext || !e ? t : qr(i, t, e, s);
}
function qr(i, t, e, s) {
    const n = i._chart.getContext(), o = fs(i.options), { _datasetIndex: r, options: { spanGaps: a } } = i, l = e.length, c = [];
    let h = o, d = t[0].start, u = d;
    function f(g, p, m, b) {
        const x = a ? -1 : 1;
        if (g !== p) {
            for(g += l; e[g % l].skip;)g -= x;
            for(; e[p % l].skip;)p += x;
            g % l !== p % l && (c.push({
                start: g % l,
                end: p % l,
                loop: m,
                style: b
            }), h = b, d = p % l);
        }
    }
    for (const g of t){
        d = a ? d : g.start;
        let p = e[d % l], m;
        for(u = d + 1; u <= g.end; u++){
            const b = e[u % l];
            m = fs(s.setContext(vt(n, {
                type: "segment",
                p0: p,
                p1: b,
                p0DataIndex: (u - 1) % l,
                p1DataIndex: u % l,
                datasetIndex: r
            }))), Gr(m, h) && f(d, u - 1, g.loop, h), p = b, h = m;
        }
        d < u - 1 && f(d, u - 1, g.loop, h);
    }
    return c;
}
function fs(i) {
    return {
        backgroundColor: i.backgroundColor,
        borderCapStyle: i.borderCapStyle,
        borderDash: i.borderDash,
        borderDashOffset: i.borderDashOffset,
        borderJoinStyle: i.borderJoinStyle,
        borderWidth: i.borderWidth,
        borderColor: i.borderColor
    };
}
function Gr(i, t) {
    return t && JSON.stringify(i) !== JSON.stringify(t);
}
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ class Zr {
    constructor(){
        this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
    }
    _notify(t, e, s, n) {
        const o = e.listeners[n], r = e.duration;
        o.forEach((a)=>a({
                chart: t,
                initial: e.initial,
                numSteps: r,
                currentStep: Math.min(s - e.start, r)
            }));
    }
    _refresh() {
        this._request || (this._running = !0, this._request = fn.call(window, ()=>{
            this._update(), this._request = null, this._running && this._refresh();
        }));
    }
    _update(t = Date.now()) {
        let e = 0;
        this._charts.forEach((s, n)=>{
            if (!s.running || !s.items.length) return;
            const o = s.items;
            let r = o.length - 1, a = !1, l;
            for(; r >= 0; --r)l = o[r], l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
            a && (n.draw(), this._notify(n, s, t, "progress")), o.length || (s.running = !1, this._notify(n, s, t, "complete"), s.initial = !1), e += o.length;
        }), this._lastDate = t, e === 0 && (this._running = !1);
    }
    _getAnims(t) {
        const e = this._charts;
        let s = e.get(t);
        return s || (s = {
            running: !1,
            initial: !0,
            items: [],
            listeners: {
                complete: [],
                progress: []
            }
        }, e.set(t, s)), s;
    }
    listen(t, e, s) {
        this._getAnims(t).listeners[e].push(s);
    }
    add(t, e) {
        !e || !e.length || this._getAnims(t).items.push(...e);
    }
    has(t) {
        return this._getAnims(t).items.length > 0;
    }
    start(t) {
        const e = this._charts.get(t);
        e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((s, n)=>Math.max(s, n._duration), 0), this._refresh());
    }
    running(t) {
        if (!this._running) return !1;
        const e = this._charts.get(t);
        return !(!e || !e.running || !e.items.length);
    }
    stop(t) {
        const e = this._charts.get(t);
        if (!e || !e.items.length) return;
        const s = e.items;
        let n = s.length - 1;
        for(; n >= 0; --n)s[n].cancel();
        e.items = [], this._notify(t, e, Date.now(), "complete");
    }
    remove(t) {
        return this._charts.delete(t);
    }
}
var at = new Zr();
const gs = "transparent", Jr = {
    boolean (i, t, e) {
        return e > 0.5 ? t : i;
    },
    color (i, t, e) {
        const s = ns(i || gs), n = s.valid && ns(t || gs);
        return n && n.valid ? n.mix(s, e).hexString() : t;
    },
    number (i, t, e) {
        return i + (t - i) * e;
    }
};
class In {
    constructor(t, e, s, n){
        const o = e[s];
        n = Zt([
            t.to,
            n,
            o,
            t.from
        ]);
        const r = Zt([
            t.from,
            o,
            n
        ]);
        this._active = !0, this._fn = t.fn || Jr[t.type || typeof r], this._easing = ee[t.easing] || ee.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = r, this._to = n, this._promises = void 0;
    }
    active() {
        return this._active;
    }
    update(t, e, s) {
        if (this._active) {
            this._notify(!1);
            const n = this._target[this._prop], o = s - this._start, r = this._duration - o;
            this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Zt([
                t.to,
                e,
                n,
                t.from
            ]), this._from = Zt([
                t.from,
                n,
                e
            ]);
        }
    }
    cancel() {
        this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
    }
    tick(t) {
        const e = t - this._start, s = this._duration, n = this._prop, o = this._from, r = this._loop, a = this._to;
        let l;
        if (this._active = o !== a && (r || e < s), !this._active) {
            this._target[n] = a, this._notify(!0);
            return;
        }
        if (e < 0) {
            this._target[n] = o;
            return;
        }
        l = e / s % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[n] = this._fn(o, a, l);
    }
    wait() {
        const t = this._promises || (this._promises = []);
        return new Promise((e, s)=>{
            t.push({
                res: e,
                rej: s
            });
        });
    }
    _notify(t) {
        const e = t ? "res" : "rej", s = this._promises || [];
        for(let n = 0; n < s.length; n++)s[n][e]();
    }
}
const Qr = [
    "x",
    "y",
    "borderWidth",
    "radius",
    "tension"
], ta = [
    "color",
    "borderColor",
    "backgroundColor"
];
O.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
});
const ea = Object.keys(O.animation);
O.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (i)=>i !== "onProgress" && i !== "onComplete" && i !== "fn"
});
O.set("animations", {
    colors: {
        type: "color",
        properties: ta
    },
    numbers: {
        type: "number",
        properties: Qr
    }
});
O.describe("animations", {
    _fallback: "animation"
});
O.set("transitions", {
    active: {
        animation: {
            duration: 400
        }
    },
    resize: {
        animation: {
            duration: 0
        }
    },
    show: {
        animations: {
            colors: {
                from: "transparent"
            },
            visible: {
                type: "boolean",
                duration: 0
            }
        }
    },
    hide: {
        animations: {
            colors: {
                to: "transparent"
            },
            visible: {
                type: "boolean",
                easing: "linear",
                fn: (i)=>i | 0
            }
        }
    }
});
class Ni {
    constructor(t, e){
        this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
    }
    configure(t) {
        if (!D(t)) return;
        const e = this._properties;
        Object.getOwnPropertyNames(t).forEach((s)=>{
            const n = t[s];
            if (!D(n)) return;
            const o = {};
            for (const r of ea)o[r] = n[r];
            (z(n.properties) && n.properties || [
                s
            ]).forEach((r)=>{
                (r === s || !e.has(r)) && e.set(r, o);
            });
        });
    }
    _animateOptions(t, e) {
        const s = e.options, n = sa(t, s);
        if (!n) return [];
        const o = this._createAnimations(n, s);
        return s.$shared && ia(t.options.$animations, s).then(()=>{
            t.options = s;
        }, ()=>{}), o;
    }
    _createAnimations(t, e) {
        const s = this._properties, n = [], o = t.$animations || (t.$animations = {}), r = Object.keys(e), a = Date.now();
        let l;
        for(l = r.length - 1; l >= 0; --l){
            const c = r[l];
            if (c.charAt(0) === "$") continue;
            if (c === "options") {
                n.push(...this._animateOptions(t, e));
                continue;
            }
            const h = e[c];
            let d = o[c];
            const u = s.get(c);
            if (d) {
                if (u && d.active()) {
                    d.update(u, h, a);
                    continue;
                } else d.cancel();
            }
            if (!u || !u.duration) {
                t[c] = h;
                continue;
            }
            o[c] = d = new In(u, t, c, h), n.push(d);
        }
        return n;
    }
    update(t, e) {
        if (this._properties.size === 0) {
            Object.assign(t, e);
            return;
        }
        const s = this._createAnimations(t, e);
        if (s.length) return at.add(this._chart, s), !0;
    }
}
function ia(i, t) {
    const e = [], s = Object.keys(t);
    for(let n = 0; n < s.length; n++){
        const o = i[s[n]];
        o && o.active() && e.push(o.wait());
    }
    return Promise.all(e);
}
function sa(i, t) {
    if (!t) return;
    let e = i.options;
    if (!e) {
        i.options = t;
        return;
    }
    return e.$shared && (i.options = e = Object.assign({}, e, {
        $shared: !1,
        $animations: {}
    })), e;
}
function ps(i, t) {
    const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
    return {
        start: s ? o : n,
        end: s ? n : o
    };
}
function na(i, t, e) {
    if (e === !1) return !1;
    const s = ps(i, e), n = ps(t, e);
    return {
        top: n.end,
        right: s.end,
        bottom: n.start,
        left: s.start
    };
}
function oa(i) {
    let t, e, s, n;
    return D(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
        top: t,
        right: e,
        bottom: s,
        left: n,
        disabled: i === !1
    };
}
function zn(i, t) {
    const e = [], s = i._getSortedDatasetMetas(t);
    let n, o;
    for(n = 0, o = s.length; n < o; ++n)e.push(s[n].index);
    return e;
}
function ms(i, t, e, s = {}) {
    const n = i.keys, o = s.mode === "single";
    let r, a, l, c;
    if (t !== null) {
        for(r = 0, a = n.length; r < a; ++r){
            if (l = +n[r], l === e) {
                if (s.all) continue;
                break;
            }
            c = i.values[l], N(c) && (o || t === 0 || lt(t) === lt(c)) && (t += c);
        }
        return t;
    }
}
function ra(i) {
    const t = Object.keys(i), e = new Array(t.length);
    let s, n, o;
    for(s = 0, n = t.length; s < n; ++s)o = t[s], e[s] = {
        x: o,
        y: i[o]
    };
    return e;
}
function bs(i, t) {
    const e = i && i.options.stacked;
    return e || e === void 0 && t.stack !== void 0;
}
function aa(i, t, e) {
    return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function la(i) {
    const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
    return {
        min: s ? t : Number.NEGATIVE_INFINITY,
        max: n ? e : Number.POSITIVE_INFINITY
    };
}
function ca(i, t, e) {
    const s = i[t] || (i[t] = {});
    return s[e] || (s[e] = {});
}
function xs(i, t, e, s) {
    for (const n of t.getMatchingVisibleMetas(s).reverse()){
        const o = i[n.index];
        if (e && o > 0 || !e && o < 0) return n.index;
    }
    return null;
}
function _s(i, t) {
    const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, h = aa(o, r, s), d = t.length;
    let u;
    for(let f = 0; f < d; ++f){
        const g = t[f], { [l]: p, [c]: m } = g, b = g._stacks || (g._stacks = {});
        u = b[c] = ca(n, h, p), u[a] = m, u._top = xs(u, r, !0, s.type), u._bottom = xs(u, r, !1, s.type);
    }
}
function li(i, t) {
    const e = i.scales;
    return Object.keys(e).filter((s)=>e[s].axis === t).shift();
}
function ha(i, t) {
    return vt(i, {
        active: !1,
        dataset: void 0,
        datasetIndex: t,
        index: t,
        mode: "default",
        type: "dataset"
    });
}
function da(i, t, e) {
    return vt(i, {
        active: !1,
        dataIndex: t,
        parsed: void 0,
        raw: void 0,
        element: e,
        index: t,
        mode: "default",
        type: "data"
    });
}
function Yt(i, t) {
    const e = i.controller.index, s = i.vScale && i.vScale.axis;
    if (s) {
        t = t || i._parsed;
        for (const n of t){
            const o = n._stacks;
            if (!o || o[s] === void 0 || o[s][e] === void 0) return;
            delete o[s][e];
        }
    }
}
const ci = (i)=>i === "reset" || i === "none", ys = (i, t)=>t ? i : Object.assign({}, i), ua = (i, t, e)=>i && !t.hidden && t._stacked && {
        keys: zn(e, !0),
        values: null
    };
class it {
    constructor(t, e){
        this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.initialize();
    }
    initialize() {
        const t = this._cachedMeta;
        this.configure(), this.linkScales(), t._stacked = bs(t.vScale, t), this.addElements();
    }
    updateIndex(t) {
        this.index !== t && Yt(this._cachedMeta), this.index = t;
    }
    linkScales() {
        const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (d, u, f, g)=>d === "x" ? u : d === "r" ? g : f, o = e.xAxisID = C(s.xAxisID, li(t, "x")), r = e.yAxisID = C(s.yAxisID, li(t, "y")), a = e.rAxisID = C(s.rAxisID, li(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, r, a), h = e.vAxisID = n(l, r, o, a);
        e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(r), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h);
    }
    getDataset() {
        return this.chart.data.datasets[this.index];
    }
    getMeta() {
        return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(t) {
        return this.chart.scales[t];
    }
    _getOtherScale(t) {
        const e = this._cachedMeta;
        return t === e.iScale ? e.vScale : e.iScale;
    }
    reset() {
        this._update("reset");
    }
    _destroy() {
        const t = this._cachedMeta;
        this._data && Zi(this._data, this), t._stacked && Yt(t);
    }
    _dataCheck() {
        const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
        if (D(e)) this._data = ra(e);
        else if (s !== e) {
            if (s) {
                Zi(s, this);
                const n = this._cachedMeta;
                Yt(n), n._parsed = [];
            }
            e && Object.isExtensible(e) && Eo(e, this), this._syncList = [], this._data = e;
        }
    }
    addElements() {
        const t = this._cachedMeta;
        this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
    }
    buildOrUpdateElements(t) {
        const e = this._cachedMeta, s = this.getDataset();
        let n = !1;
        this._dataCheck();
        const o = e._stacked;
        e._stacked = bs(e.vScale, e), e.stack !== s.stack && (n = !0, Yt(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && _s(this, e._parsed);
    }
    configure() {
        const t = this.chart.config, e = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), e, !0);
        this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
    }
    parse(t, e) {
        const { _cachedMeta: s, _data: n } = this, { iScale: o, _stacked: r } = s, a = o.axis;
        let l = t === 0 && e === n.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], h, d, u;
        if (this._parsing === !1) s._parsed = n, s._sorted = !0, u = n;
        else {
            z(n[t]) ? u = this.parseArrayData(s, n, t, e) : D(n[t]) ? u = this.parseObjectData(s, n, t, e) : u = this.parsePrimitiveData(s, n, t, e);
            const f = ()=>d[a] === null || c && d[a] < c[a];
            for(h = 0; h < e; ++h)s._parsed[h + t] = d = u[h], l && (f() && (l = !1), c = d);
            s._sorted = l;
        }
        r && _s(this, u);
    }
    parsePrimitiveData(t, e, s, n) {
        const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), h = o === r, d = new Array(n);
        let u, f, g;
        for(u = 0, f = n; u < f; ++u)g = u + s, d[u] = {
            [a]: h || o.parse(c[g], g),
            [l]: r.parse(e[g], g)
        };
        return d;
    }
    parseArrayData(t, e, s, n) {
        const { xScale: o, yScale: r } = t, a = new Array(n);
        let l, c, h, d;
        for(l = 0, c = n; l < c; ++l)h = l + s, d = e[h], a[l] = {
            x: o.parse(d[0], h),
            y: r.parse(d[1], h)
        };
        return a;
    }
    parseObjectData(t, e, s, n) {
        const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(n);
        let h, d, u, f;
        for(h = 0, d = n; h < d; ++h)u = h + s, f = e[u], c[h] = {
            x: o.parse(_t(f, a), u),
            y: r.parse(_t(f, l), u)
        };
        return c;
    }
    getParsed(t) {
        return this._cachedMeta._parsed[t];
    }
    getDataElement(t) {
        return this._cachedMeta.data[t];
    }
    applyStack(t, e, s) {
        const n = this.chart, o = this._cachedMeta, r = e[t.axis], a = {
            keys: zn(n, !0),
            values: e._stacks[t.axis]
        };
        return ms(a, r, o.index, {
            mode: s
        });
    }
    updateRangeFromParsed(t, e, s, n) {
        const o = s[e.axis];
        let r = o === null ? NaN : o;
        const a = n && s._stacks[e.axis];
        n && a && (n.values = a, r = ms(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
    }
    getMinMax(t, e) {
        const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, r = n.length, a = this._getOtherScale(t), l = ua(e, s, this.chart), c = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        }, { min: h, max: d } = la(a);
        let u, f;
        function g() {
            f = n[u];
            const p = f[a.axis];
            return !N(f[t.axis]) || h > p || d < p;
        }
        for(u = 0; u < r && !(!g() && (this.updateRangeFromParsed(c, t, f, l), o)); ++u);
        if (o) {
            for(u = r - 1; u >= 0; --u)if (!g()) {
                this.updateRangeFromParsed(c, t, f, l);
                break;
            }
        }
        return c;
    }
    getAllParsedValues(t) {
        const e = this._cachedMeta._parsed, s = [];
        let n, o, r;
        for(n = 0, o = e.length; n < o; ++n)r = e[n][t.axis], N(r) && s.push(r);
        return s;
    }
    getMaxOverflow() {
        return !1;
    }
    getLabelAndValue(t) {
        const e = this._cachedMeta, s = e.iScale, n = e.vScale, o = this.getParsed(t);
        return {
            label: s ? "" + s.getLabelForValue(o[s.axis]) : "",
            value: n ? "" + n.getLabelForValue(o[n.axis]) : ""
        };
    }
    _update(t) {
        const e = this._cachedMeta;
        this.update(t || "default"), e._clip = oa(C(this.options.clip, na(e.xScale, e.yScale, this.getMaxOverflow())));
    }
    update(t) {}
    draw() {
        const t = this._ctx, e = this.chart, s = this._cachedMeta, n = s.data || [], o = e.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || n.length - a, c = this.options.drawActiveElementsOnTop;
        let h;
        for(s.dataset && s.dataset.draw(t, o, a, l), h = a; h < a + l; ++h){
            const d = n[h];
            d.hidden || (d.active && c ? r.push(d) : d.draw(t, o));
        }
        for(h = 0; h < r.length; ++h)r[h].draw(t, o);
    }
    getStyle(t, e) {
        const s = e ? "active" : "default";
        return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s);
    }
    getContext(t, e, s) {
        const n = this.getDataset();
        let o;
        if (t >= 0 && t < this._cachedMeta.data.length) {
            const r = this._cachedMeta.data[t];
            o = r.$context || (r.$context = da(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
        } else o = this.$context || (this.$context = ha(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
        return o.active = !!e, o.mode = s, o;
    }
    resolveDatasetElementOptions(t) {
        return this._resolveElementOptions(this.datasetElementType.id, t);
    }
    resolveDataElementOptions(t, e) {
        return this._resolveElementOptions(this.dataElementType.id, e, t);
    }
    _resolveElementOptions(t, e = "default", s) {
        const n = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && et(s);
        if (a) return ys(a, l);
        const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), d = n ? [
            `${t}Hover`,
            "hover",
            t,
            ""
        ] : [
            t,
            ""
        ], u = c.getOptionScopes(this.getDataset(), h), f = Object.keys(O.elements[t]), g = ()=>this.getContext(s, n), p = c.resolveNamedOptions(u, f, g, d);
        return p.$shared && (p.$shared = l, o[r] = Object.freeze(ys(p, l))), p;
    }
    _resolveAnimations(t, e, s) {
        const n = this.chart, o = this._cachedDataOpts, r = `animation-${e}`, a = o[r];
        if (a) return a;
        let l;
        if (n.options.animation !== !1) {
            const h = this.chart.config, d = h.datasetAnimationScopeKeys(this._type, e), u = h.getOptionScopes(this.getDataset(), d);
            l = h.createResolver(u, this.getContext(t, s, e));
        }
        const c = new Ni(n, l && l.animations);
        return l && l._cacheable && (o[r] = Object.freeze(c)), c;
    }
    getSharedOptions(t) {
        if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
    }
    includeOptions(t, e) {
        return !e || ci(t) || this.chart._animationsDisabled;
    }
    _getSharedOptions(t, e) {
        const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(e, o) || o !== n;
        return this.updateSharedOptions(o, e, s), {
            sharedOptions: o,
            includeOptions: r
        };
    }
    updateElement(t, e, s, n) {
        ci(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
    }
    updateSharedOptions(t, e, s) {
        t && !ci(e) && this._resolveAnimations(void 0, e).update(t, s);
    }
    _setStyle(t, e, s, n) {
        t.active = n;
        const o = this.getStyle(e, n);
        this._resolveAnimations(e, s, n).update(t, {
            options: !n && this.getSharedOptions(o) || o
        });
    }
    removeHoverStyle(t, e, s) {
        this._setStyle(t, s, "active", !1);
    }
    setHoverStyle(t, e, s) {
        this._setStyle(t, s, "active", !0);
    }
    _removeDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !1);
    }
    _setDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !0);
    }
    _resyncElements(t) {
        const e = this._data, s = this._cachedMeta.data;
        for (const [a, l, c] of this._syncList)this[a](l, c);
        this._syncList = [];
        const n = s.length, o = e.length, r = Math.min(o, n);
        r && this.parse(0, r), o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o);
    }
    _insertElements(t, e, s = !0) {
        const n = this._cachedMeta, o = n.data, r = t + e;
        let a;
        const l = (c)=>{
            for(c.length += e, a = c.length - 1; a >= r; a--)c[a] = c[a - e];
        };
        for(l(o), a = t; a < r; ++a)o[a] = new this.dataElementType();
        this._parsing && l(n._parsed), this.parse(t, e), s && this.updateElements(o, t, e, "reset");
    }
    updateElements(t, e, s, n) {}
    _removeElements(t, e) {
        const s = this._cachedMeta;
        if (this._parsing) {
            const n = s._parsed.splice(t, e);
            s._stacked && Yt(s, n);
        }
        s.data.splice(t, e);
    }
    _sync(t) {
        if (this._parsing) this._syncList.push(t);
        else {
            const [e, s, n] = t;
            this[e](s, n);
        }
        this.chart._dataChanges.push([
            this.index,
            ...t
        ]);
    }
    _onDataPush() {
        const t = arguments.length;
        this._sync([
            "_insertElements",
            this.getDataset().data.length - t,
            t
        ]);
    }
    _onDataPop() {
        this._sync([
            "_removeElements",
            this._cachedMeta.data.length - 1,
            1
        ]);
    }
    _onDataShift() {
        this._sync([
            "_removeElements",
            0,
            1
        ]);
    }
    _onDataSplice(t, e) {
        e && this._sync([
            "_removeElements",
            t,
            e
        ]);
        const s = arguments.length - 2;
        s && this._sync([
            "_insertElements",
            t,
            s
        ]);
    }
    _onDataUnshift() {
        this._sync([
            "_insertElements",
            0,
            arguments.length
        ]);
    }
}
it.defaults = {};
it.prototype.datasetElementType = null;
it.prototype.dataElementType = null;
function fa(i, t) {
    if (!i._cache.$bar) {
        const e = i.getMatchingVisibleMetas(t);
        let s = [];
        for(let n = 0, o = e.length; n < o; n++)s = s.concat(e[n].controller.getAllParsedValues(i));
        i._cache.$bar = un(s.sort((n, o)=>n - o));
    }
    return i._cache.$bar;
}
function ga(i) {
    const t = i.iScale, e = fa(t, i.type);
    let s = t._length, n, o, r, a;
    const l = ()=>{
        r === 32767 || r === -32768 || (et(a) && (s = Math.min(s, Math.abs(r - a) || s)), a = r);
    };
    for(n = 0, o = e.length; n < o; ++n)r = t.getPixelForValue(e[n]), l();
    for(a = void 0, n = 0, o = t.ticks.length; n < o; ++n)r = t.getPixelForTick(n), l();
    return s;
}
function pa(i, t, e, s) {
    const n = e.barThickness;
    let o, r;
    return T(n) ? (o = t.min * e.categoryPercentage, r = e.barPercentage) : (o = n * s, r = 1), {
        chunk: o / s,
        ratio: r,
        start: t.pixels[i] - o / 2
    };
}
function ma(i, t, e, s) {
    const n = t.pixels, o = n[i];
    let r = i > 0 ? n[i - 1] : null, a = i < n.length - 1 ? n[i + 1] : null;
    const l = e.categoryPercentage;
    r === null && (r = o - (a === null ? t.end - t.start : a - o)), a === null && (a = o + o - r);
    const c = o - (o - Math.min(r, a)) / 2 * l;
    return {
        chunk: Math.abs(a - r) / 2 * l / s,
        ratio: e.barPercentage,
        start: c
    };
}
function ba(i, t, e, s) {
    const n = e.parse(i[0], s), o = e.parse(i[1], s), r = Math.min(n, o), a = Math.max(n, o);
    let l = r, c = a;
    Math.abs(r) > Math.abs(a) && (l = a, c = r), t[e.axis] = c, t._custom = {
        barStart: l,
        barEnd: c,
        start: n,
        end: o,
        min: r,
        max: a
    };
}
function Bn(i, t, e, s) {
    return z(i) ? ba(i, t, e, s) : t[e.axis] = e.parse(i, s), t;
}
function vs(i, t, e, s) {
    const n = i.iScale, o = i.vScale, r = n.getLabels(), a = n === o, l = [];
    let c, h, d, u;
    for(c = e, h = e + s; c < h; ++c)u = t[c], d = {}, d[n.axis] = a || n.parse(r[c], c), l.push(Bn(u, d, o, c));
    return l;
}
function hi(i) {
    return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function xa(i, t, e) {
    return i !== 0 ? lt(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function _a(i) {
    let t, e, s, n, o;
    return i.horizontal ? (t = i.base > i.x, e = "left", s = "right") : (t = i.base < i.y, e = "bottom", s = "top"), t ? (n = "end", o = "start") : (n = "start", o = "end"), {
        start: e,
        end: s,
        reverse: t,
        top: n,
        bottom: o
    };
}
function ya(i, t, e, s) {
    let n = t.borderSkipped;
    const o = {};
    if (!n) {
        i.borderSkipped = o;
        return;
    }
    if (n === !0) {
        i.borderSkipped = {
            top: !0,
            right: !0,
            bottom: !0,
            left: !0
        };
        return;
    }
    const { start: r, end: a, reverse: l, top: c, bottom: h } = _a(i);
    n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = h : (o[Ms(h, r, a, l)] = !0, n = c)), o[Ms(n, r, a, l)] = !0, i.borderSkipped = o;
}
function Ms(i, t, e, s) {
    return s ? (i = va(i, t, e), i = ks(i, e, t)) : i = ks(i, t, e), i;
}
function va(i, t, e) {
    return i === t ? e : i === e ? t : i;
}
function ks(i, t, e) {
    return i === "start" ? t : i === "end" ? e : i;
}
function Ma(i, { inflateAmount: t }, e) {
    i.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class ue extends it {
    parsePrimitiveData(t, e, s, n) {
        return vs(t, e, s, n);
    }
    parseArrayData(t, e, s, n) {
        return vs(t, e, s, n);
    }
    parseObjectData(t, e, s, n) {
        const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, h = r.axis === "x" ? a : l, d = [];
        let u, f, g, p;
        for(u = s, f = s + n; u < f; ++u)p = e[u], g = {}, g[o.axis] = o.parse(_t(p, c), u), d.push(Bn(_t(p, h), g, r, u));
        return d;
    }
    updateRangeFromParsed(t, e, s, n) {
        super.updateRangeFromParsed(t, e, s, n);
        const o = s._custom;
        o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max));
    }
    getMaxOverflow() {
        return 0;
    }
    getLabelAndValue(t) {
        const e = this._cachedMeta, { iScale: s, vScale: n } = e, o = this.getParsed(t), r = o._custom, a = hi(r) ? "[" + r.start + ", " + r.end + "]" : "" + n.getLabelForValue(o[n.axis]);
        return {
            label: "" + s.getLabelForValue(o[s.axis]),
            value: a
        };
    }
    initialize() {
        this.enableOptionSharing = !0, super.initialize();
        const t = this._cachedMeta;
        t.stack = this.getDataset().stack;
    }
    update(t) {
        const e = this._cachedMeta;
        this.updateElements(e.data, 0, e.data.length, t);
    }
    updateElements(t, e, s, n) {
        const o = n === "reset", { index: r, _cachedMeta: { vScale: a } } = this, l = a.getBasePixel(), c = a.isHorizontal(), h = this._getRuler(), { sharedOptions: d, includeOptions: u } = this._getSharedOptions(e, n);
        for(let f = e; f < e + s; f++){
            const g = this.getParsed(f), p = o || T(g[a.axis]) ? {
                base: l,
                head: l
            } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, h), b = (g._stacks || {})[a.axis], x = {
                horizontal: c,
                base: p.base,
                enableBorderRadius: !b || hi(g._custom) || r === b._top || r === b._bottom,
                x: c ? p.head : m.center,
                y: c ? m.center : p.head,
                height: c ? m.size : Math.abs(p.size),
                width: c ? Math.abs(p.size) : m.size
            };
            u && (x.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
            const v = x.options || t[f].options;
            ya(x, v, b, r), Ma(x, v, h.ratio), this.updateElement(t[f], f, x, n);
        }
    }
    _getStacks(t, e) {
        const { iScale: s } = this._cachedMeta, n = s.getMatchingVisibleMetas(this._type).filter((l)=>l.controller.options.grouped), o = s.options.stacked, r = [], a = (l)=>{
            const c = l.controller.getParsed(e), h = c && c[l.vScale.axis];
            if (T(h) || isNaN(h)) return !0;
        };
        for (const l of n)if (!(e !== void 0 && a(l)) && ((o === !1 || r.indexOf(l.stack) === -1 || o === void 0 && l.stack === void 0) && r.push(l.stack), l.index === t)) break;
        return r.length || r.push(void 0), r;
    }
    _getStackCount(t) {
        return this._getStacks(void 0, t).length;
    }
    _getStackIndex(t, e, s) {
        const n = this._getStacks(t, s), o = e !== void 0 ? n.indexOf(e) : -1;
        return o === -1 ? n.length - 1 : o;
    }
    _getRuler() {
        const t = this.options, e = this._cachedMeta, s = e.iScale, n = [];
        let o, r;
        for(o = 0, r = e.data.length; o < r; ++o)n.push(s.getPixelForValue(this.getParsed(o)[s.axis], o));
        const a = t.barThickness;
        return {
            min: a || ga(e),
            pixels: n,
            start: s._startPixel,
            end: s._endPixel,
            stackCount: this._getStackCount(),
            scale: s,
            grouped: t.grouped,
            ratio: a ? 1 : t.categoryPercentage * t.barPercentage
        };
    }
    _calculateBarValuePixels(t) {
        const { _cachedMeta: { vScale: e, _stacked: s }, options: { base: n, minBarLength: o } } = this, r = n || 0, a = this.getParsed(t), l = a._custom, c = hi(l);
        let h = a[e.axis], d = 0, u = s ? this.applyStack(e, a, s) : h, f, g;
        u !== h && (d = u - h, u = h), c && (h = l.barStart, u = l.barEnd - l.barStart, h !== 0 && lt(h) !== lt(l.barEnd) && (d = 0), d += h);
        const p = !T(n) && !c ? n : d;
        let m = e.getPixelForValue(p);
        if (this.chart.getDataVisibility(t) ? f = e.getPixelForValue(d + u) : f = m, g = f - m, Math.abs(g) < o) {
            g = xa(g, e, r) * o, h === r && (m -= g / 2);
            const b = e.getPixelForDecimal(0), x = e.getPixelForDecimal(1), v = Math.min(b, x), y = Math.max(b, x);
            m = Math.max(Math.min(m, y), v), f = m + g;
        }
        if (m === e.getPixelForValue(r)) {
            const b = lt(g) * e.getLineWidthForValue(r) / 2;
            m += b, g -= b;
        }
        return {
            size: g,
            base: m,
            head: f,
            center: f + g / 2
        };
    }
    _calculateBarIndexPixels(t, e) {
        const s = e.scale, n = this.options, o = n.skipNull, r = C(n.maxBarThickness, 1 / 0);
        let a, l;
        if (e.grouped) {
            const c = o ? this._getStackCount(t) : e.stackCount, h = n.barThickness === "flex" ? ma(t, e, n, c) : pa(t, e, n, c), d = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
            a = h.start + h.chunk * d + h.chunk / 2, l = Math.min(r, h.chunk * h.ratio);
        } else a = s.getPixelForValue(this.getParsed(t)[s.axis], t), l = Math.min(r, e.min * e.ratio);
        return {
            base: a - l / 2,
            head: a + l / 2,
            center: a,
            size: l
        };
    }
    draw() {
        const t = this._cachedMeta, e = t.vScale, s = t.data, n = s.length;
        let o = 0;
        for(; o < n; ++o)this.getParsed(o)[e.axis] !== null && s[o].draw(this._ctx);
    }
}
ue.id = "bar";
ue.defaults = {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
        numbers: {
            type: "number",
            properties: [
                "x",
                "y",
                "base",
                "width",
                "height"
            ]
        }
    }
};
ue.overrides = {
    scales: {
        _index_: {
            type: "category",
            offset: !0,
            grid: {
                offset: !0
            }
        },
        _value_: {
            type: "linear",
            beginAtZero: !0
        }
    }
};
class fe extends it {
    initialize() {
        this.enableOptionSharing = !0, super.initialize();
    }
    parsePrimitiveData(t, e, s, n) {
        const o = super.parsePrimitiveData(t, e, s, n);
        for(let r = 0; r < o.length; r++)o[r]._custom = this.resolveDataElementOptions(r + s).radius;
        return o;
    }
    parseArrayData(t, e, s, n) {
        const o = super.parseArrayData(t, e, s, n);
        for(let r = 0; r < o.length; r++){
            const a = e[s + r];
            o[r]._custom = C(a[2], this.resolveDataElementOptions(r + s).radius);
        }
        return o;
    }
    parseObjectData(t, e, s, n) {
        const o = super.parseObjectData(t, e, s, n);
        for(let r = 0; r < o.length; r++){
            const a = e[s + r];
            o[r]._custom = C(a && a.r && +a.r, this.resolveDataElementOptions(r + s).radius);
        }
        return o;
    }
    getMaxOverflow() {
        const t = this._cachedMeta.data;
        let e = 0;
        for(let s = t.length - 1; s >= 0; --s)e = Math.max(e, t[s].size(this.resolveDataElementOptions(s)) / 2);
        return e > 0 && e;
    }
    getLabelAndValue(t) {
        const e = this._cachedMeta, { xScale: s, yScale: n } = e, o = this.getParsed(t), r = s.getLabelForValue(o.x), a = n.getLabelForValue(o.y), l = o._custom;
        return {
            label: e.label,
            value: "(" + r + ", " + a + (l ? ", " + l : "") + ")"
        };
    }
    update(t) {
        const e = this._cachedMeta.data;
        this.updateElements(e, 0, e.length, t);
    }
    updateElements(t, e, s, n) {
        const o = n === "reset", { iScale: r, vScale: a } = this._cachedMeta, { sharedOptions: l, includeOptions: c } = this._getSharedOptions(e, n), h = r.axis, d = a.axis;
        for(let u = e; u < e + s; u++){
            const f = t[u], g = !o && this.getParsed(u), p = {}, m = p[h] = o ? r.getPixelForDecimal(0.5) : r.getPixelForValue(g[h]), b = p[d] = o ? a.getBasePixel() : a.getPixelForValue(g[d]);
            p.skip = isNaN(m) || isNaN(b), c && (p.options = l || this.resolveDataElementOptions(u, f.active ? "active" : n), o && (p.options.radius = 0)), this.updateElement(f, u, p, n);
        }
    }
    resolveDataElementOptions(t, e) {
        const s = this.getParsed(t);
        let n = super.resolveDataElementOptions(t, e);
        n.$shared && (n = Object.assign({}, n, {
            $shared: !1
        }));
        const o = n.radius;
        return e !== "active" && (n.radius = 0), n.radius += C(s && s._custom, o), n;
    }
}
fe.id = "bubble";
fe.defaults = {
    datasetElementType: !1,
    dataElementType: "point",
    animations: {
        numbers: {
            type: "number",
            properties: [
                "x",
                "y",
                "borderWidth",
                "radius"
            ]
        }
    }
};
fe.overrides = {
    scales: {
        x: {
            type: "linear"
        },
        y: {
            type: "linear"
        }
    },
    plugins: {
        tooltip: {
            callbacks: {
                title () {
                    return "";
                }
            }
        }
    }
};
function ka(i, t, e) {
    let s = 1, n = 1, o = 0, r = 0;
    if (t < F) {
        const a = i, l = a + t, c = Math.cos(a), h = Math.sin(a), d = Math.cos(l), u = Math.sin(l), f = (v, y, _)=>oe(v, a, l, !0) ? 1 : Math.max(y, y * e, _, _ * e), g = (v, y, _)=>oe(v, a, l, !0) ? -1 : Math.min(y, y * e, _, _ * e), p = f(0, c, d), m = f(V, h, u), b = g(B, c, d), x = g(B + V, h, u);
        s = (p - b) / 2, n = (m - x) / 2, o = -(p + b) / 2, r = -(m + x) / 2;
    }
    return {
        ratioX: s,
        ratioY: n,
        offsetX: o,
        offsetY: r
    };
}
class Lt extends it {
    constructor(t, e){
        super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
    }
    linkScales() {}
    parse(t, e) {
        const s = this.getDataset().data, n = this._cachedMeta;
        if (this._parsing === !1) n._parsed = s;
        else {
            let o = (l)=>+s[l];
            if (D(s[t])) {
                const { key: l = "value" } = this._parsing;
                o = (c)=>+_t(s[c], l);
            }
            let r, a;
            for(r = t, a = t + e; r < a; ++r)n._parsed[r] = o(r);
        }
    }
    _getRotation() {
        return nt(this.options.rotation - 90);
    }
    _getCircumference() {
        return nt(this.options.circumference);
    }
    _getRotationExtents() {
        let t = F, e = -F;
        for(let s = 0; s < this.chart.data.datasets.length; ++s)if (this.chart.isDatasetVisible(s)) {
            const n = this.chart.getDatasetMeta(s).controller, o = n._getRotation(), r = n._getCircumference();
            t = Math.min(t, o), e = Math.max(e, o + r);
        }
        return {
            rotation: t,
            circumference: e - t
        };
    }
    update(t) {
        const e = this.chart, { chartArea: s } = e, n = this._cachedMeta, o = n.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - r) / 2, 0), l = Math.min(yo(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: h, rotation: d } = this._getRotationExtents(), { ratioX: u, ratioY: f, offsetX: g, offsetY: p } = ka(d, h, l), m = (s.width - r) / u, b = (s.height - r) / f, x = Math.max(Math.min(m, b) / 2, 0), v = an(this.options.radius, x), y = Math.max(v * l, 0), _ = (v - y) / this._getVisibleDatasetWeightTotal();
        this.offsetX = g * v, this.offsetY = p * v, n.total = this.calculateTotal(), this.outerRadius = v - _ * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - _ * c, 0), this.updateElements(o, 0, o.length, t);
    }
    _circumference(t, e) {
        const s = this.options, n = this._cachedMeta, o = this._getCircumference();
        return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / F);
    }
    updateElements(t, e, s, n) {
        const o = n === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, h = (a.left + a.right) / 2, d = (a.top + a.bottom) / 2, u = o && c.animateScale, f = u ? 0 : this.innerRadius, g = u ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: m } = this._getSharedOptions(e, n);
        let b = this._getRotation(), x;
        for(x = 0; x < e; ++x)b += this._circumference(x, o);
        for(x = e; x < e + s; ++x){
            const v = this._circumference(x, o), y = t[x], _ = {
                x: h + this.offsetX,
                y: d + this.offsetY,
                startAngle: b,
                endAngle: b + v,
                circumference: v,
                outerRadius: g,
                innerRadius: f
            };
            m && (_.options = p || this.resolveDataElementOptions(x, y.active ? "active" : n)), b += v, this.updateElement(y, x, _, n);
        }
    }
    calculateTotal() {
        const t = this._cachedMeta, e = t.data;
        let s = 0, n;
        for(n = 0; n < e.length; n++){
            const o = t._parsed[n];
            o !== null && !isNaN(o) && this.chart.getDataVisibility(n) && !e[n].hidden && (s += Math.abs(o));
        }
        return s;
    }
    calculateCircumference(t) {
        const e = this._cachedMeta.total;
        return e > 0 && !isNaN(t) ? F * (Math.abs(t) / e) : 0;
    }
    getLabelAndValue(t) {
        const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = de(e._parsed[t], s.options.locale);
        return {
            label: n[t] || "",
            value: o
        };
    }
    getMaxBorderWidth(t) {
        let e = 0;
        const s = this.chart;
        let n, o, r, a, l;
        if (!t) {
            for(n = 0, o = s.data.datasets.length; n < o; ++n)if (s.isDatasetVisible(n)) {
                r = s.getDatasetMeta(n), t = r.data, a = r.controller;
                break;
            }
        }
        if (!t) return 0;
        for(n = 0, o = t.length; n < o; ++n)l = a.resolveDataElementOptions(n), l.borderAlign !== "inner" && (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
        return e;
    }
    getMaxOffset(t) {
        let e = 0;
        for(let s = 0, n = t.length; s < n; ++s){
            const o = this.resolveDataElementOptions(s);
            e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
        }
        return e;
    }
    _getRingWeightOffset(t) {
        let e = 0;
        for(let s = 0; s < t; ++s)this.chart.isDatasetVisible(s) && (e += this._getRingWeight(s));
        return e;
    }
    _getRingWeight(t) {
        return Math.max(C(this.chart.data.datasets[t].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
}
Lt.id = "doughnut";
Lt.defaults = {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: {
        animateRotate: !0,
        animateScale: !1
    },
    animations: {
        numbers: {
            type: "number",
            properties: [
                "circumference",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "startAngle",
                "x",
                "y",
                "offset",
                "borderWidth",
                "spacing"
            ]
        }
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r"
};
Lt.descriptors = {
    _scriptable: (i)=>i !== "spacing",
    _indexable: (i)=>i !== "spacing"
};
Lt.overrides = {
    aspectRatio: 1,
    plugins: {
        legend: {
            labels: {
                generateLabels (i) {
                    const t = i.data;
                    if (t.labels.length && t.datasets.length) {
                        const { labels: { pointStyle: e } } = i.legend.options;
                        return t.labels.map((s, n)=>{
                            const r = i.getDatasetMeta(0).controller.getStyle(n);
                            return {
                                text: s,
                                fillStyle: r.backgroundColor,
                                strokeStyle: r.borderColor,
                                lineWidth: r.borderWidth,
                                pointStyle: e,
                                hidden: !i.getDataVisibility(n),
                                index: n
                            };
                        });
                    }
                    return [];
                }
            },
            onClick (i, t, e) {
                e.chart.toggleDataVisibility(t.index), e.chart.update();
            }
        },
        tooltip: {
            callbacks: {
                title () {
                    return "";
                },
                label (i) {
                    let t = i.label;
                    const e = ": " + i.formattedValue;
                    return z(t) ? (t = t.slice(), t[0] += e) : t += e, t;
                }
            }
        }
    }
};
class ge extends it {
    initialize() {
        this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
    }
    update(t) {
        const e = this._cachedMeta, { dataset: s, data: n = [], _dataset: o } = e, r = this.chart._animationsDisabled;
        let { start: a, count: l } = pn(e, n, r);
        this._drawStart = a, this._drawCount = l, mn(e) && (a = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
        const c = this.resolveDatasetElementOptions(t);
        this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
            animated: !r,
            options: c
        }, t), this.updateElements(n, a, l, t);
    }
    updateElements(t, e, s, n) {
        const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: h, includeOptions: d } = this._getSharedOptions(e, n), u = r.axis, f = a.axis, { spanGaps: g, segment: p } = this.options, m = Bt(g) ? g : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || o || n === "none";
        let x = e > 0 && this.getParsed(e - 1);
        for(let v = e; v < e + s; ++v){
            const y = t[v], _ = this.getParsed(v), M = b ? y : {}, k = T(_[f]), S = M[u] = r.getPixelForValue(_[u], v), w = M[f] = o || k ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, _, l) : _[f], v);
            M.skip = isNaN(S) || isNaN(w) || k, M.stop = v > 0 && Math.abs(_[u] - x[u]) > m, p && (M.parsed = _, M.raw = c.data[v]), d && (M.options = h || this.resolveDataElementOptions(v, y.active ? "active" : n)), b || this.updateElement(y, v, M, n), x = _;
        }
    }
    getMaxOverflow() {
        const t = this._cachedMeta, e = t.dataset, s = e.options && e.options.borderWidth || 0, n = t.data || [];
        if (!n.length) return s;
        const o = n[0].size(this.resolveDataElementOptions(0)), r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
        return Math.max(s, o, r) / 2;
    }
    draw() {
        const t = this._cachedMeta;
        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
    }
}
ge.id = "line";
ge.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1
};
ge.overrides = {
    scales: {
        _index_: {
            type: "category"
        },
        _value_: {
            type: "linear"
        }
    }
};
class pe extends it {
    constructor(t, e){
        super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
    }
    getLabelAndValue(t) {
        const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = de(e._parsed[t].r, s.options.locale);
        return {
            label: n[t] || "",
            value: o
        };
    }
    parseObjectData(t, e, s, n) {
        return Dn.bind(this)(t, e, s, n);
    }
    update(t) {
        const e = this._cachedMeta.data;
        this._updateRadius(), this.updateElements(e, 0, e.length, t);
    }
    getMinMax() {
        const t = this._cachedMeta, e = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        return t.data.forEach((s, n)=>{
            const o = this.getParsed(n).r;
            !isNaN(o) && this.chart.getDataVisibility(n) && (o < e.min && (e.min = o), o > e.max && (e.max = o));
        }), e;
    }
    _updateRadius() {
        const t = this.chart, e = t.chartArea, s = t.options, n = Math.min(e.right - e.left, e.bottom - e.top), o = Math.max(n / 2, 0), r = Math.max(s.cutoutPercentage ? o / 100 * s.cutoutPercentage : 1, 0), a = (o - r) / t.getVisibleDatasetCount();
        this.outerRadius = o - a * this.index, this.innerRadius = this.outerRadius - a;
    }
    updateElements(t, e, s, n) {
        const o = n === "reset", r = this.chart, l = r.options.animation, c = this._cachedMeta.rScale, h = c.xCenter, d = c.yCenter, u = c.getIndexAngle(0) - 0.5 * B;
        let f = u, g;
        const p = 360 / this.countVisibleElements();
        for(g = 0; g < e; ++g)f += this._computeAngle(g, n, p);
        for(g = e; g < e + s; g++){
            const m = t[g];
            let b = f, x = f + this._computeAngle(g, n, p), v = r.getDataVisibility(g) ? c.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
            f = x, o && (l.animateScale && (v = 0), l.animateRotate && (b = x = u));
            const y = {
                x: h,
                y: d,
                innerRadius: 0,
                outerRadius: v,
                startAngle: b,
                endAngle: x,
                options: this.resolveDataElementOptions(g, m.active ? "active" : n)
            };
            this.updateElement(m, g, y, n);
        }
    }
    countVisibleElements() {
        const t = this._cachedMeta;
        let e = 0;
        return t.data.forEach((s, n)=>{
            !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++;
        }), e;
    }
    _computeAngle(t, e, s) {
        return this.chart.getDataVisibility(t) ? nt(this.resolveDataElementOptions(t, e).angle || s) : 0;
    }
}
pe.id = "polarArea";
pe.defaults = {
    dataElementType: "arc",
    animation: {
        animateRotate: !0,
        animateScale: !0
    },
    animations: {
        numbers: {
            type: "number",
            properties: [
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius"
            ]
        }
    },
    indexAxis: "r",
    startAngle: 0
};
pe.overrides = {
    aspectRatio: 1,
    plugins: {
        legend: {
            labels: {
                generateLabels (i) {
                    const t = i.data;
                    if (t.labels.length && t.datasets.length) {
                        const { labels: { pointStyle: e } } = i.legend.options;
                        return t.labels.map((s, n)=>{
                            const r = i.getDatasetMeta(0).controller.getStyle(n);
                            return {
                                text: s,
                                fillStyle: r.backgroundColor,
                                strokeStyle: r.borderColor,
                                lineWidth: r.borderWidth,
                                pointStyle: e,
                                hidden: !i.getDataVisibility(n),
                                index: n
                            };
                        });
                    }
                    return [];
                }
            },
            onClick (i, t, e) {
                e.chart.toggleDataVisibility(t.index), e.chart.update();
            }
        },
        tooltip: {
            callbacks: {
                title () {
                    return "";
                },
                label (i) {
                    return i.chart.data.labels[i.dataIndex] + ": " + i.formattedValue;
                }
            }
        }
    },
    scales: {
        r: {
            type: "radialLinear",
            angleLines: {
                display: !1
            },
            beginAtZero: !0,
            grid: {
                circular: !0
            },
            pointLabels: {
                display: !1
            },
            startAngle: 0
        }
    }
};
class qe extends Lt {
}
qe.id = "pie";
qe.defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
};
class me extends it {
    getLabelAndValue(t) {
        const e = this._cachedMeta.vScale, s = this.getParsed(t);
        return {
            label: e.getLabels()[t],
            value: "" + e.getLabelForValue(s[e.axis])
        };
    }
    parseObjectData(t, e, s, n) {
        return Dn.bind(this)(t, e, s, n);
    }
    update(t) {
        const e = this._cachedMeta, s = e.dataset, n = e.data || [], o = e.iScale.getLabels();
        if (s.points = n, t !== "resize") {
            const r = this.resolveDatasetElementOptions(t);
            this.options.showLine || (r.borderWidth = 0);
            const a = {
                _loop: !0,
                _fullLoop: o.length === n.length,
                options: r
            };
            this.updateElement(s, void 0, a, t);
        }
        this.updateElements(n, 0, n.length, t);
    }
    updateElements(t, e, s, n) {
        const o = this._cachedMeta.rScale, r = n === "reset";
        for(let a = e; a < e + s; a++){
            const l = t[a], c = this.resolveDataElementOptions(a, l.active ? "active" : n), h = o.getPointPositionForValue(a, this.getParsed(a).r), d = r ? o.xCenter : h.x, u = r ? o.yCenter : h.y, f = {
                x: d,
                y: u,
                angle: h.angle,
                skip: isNaN(d) || isNaN(u),
                options: c
            };
            this.updateElement(l, a, f, n);
        }
    }
}
me.id = "radar";
me.defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    indexAxis: "r",
    showLine: !0,
    elements: {
        line: {
            fill: "start"
        }
    }
};
me.overrides = {
    aspectRatio: 1,
    scales: {
        r: {
            type: "radialLinear"
        }
    }
};
class st {
    constructor(){
        this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0;
    }
    tooltipPosition(t) {
        const { x: e, y: s } = this.getProps([
            "x",
            "y"
        ], t);
        return {
            x: e,
            y: s
        };
    }
    hasValue() {
        return Bt(this.x) && Bt(this.y);
    }
    getProps(t, e) {
        const s = this.$animations;
        if (!e || !s) return this;
        const n = {};
        return t.forEach((o)=>{
            n[o] = s[o] && s[o].active() ? s[o]._to : this[o];
        }), n;
    }
}
st.defaults = {};
st.defaultRoutes = void 0;
const Vn = {
    values (i) {
        return z(i) ? i : "" + i;
    },
    numeric (i, t, e) {
        if (i === 0) return "0";
        const s = this.chart.options.locale;
        let n, o = i;
        if (e.length > 1) {
            const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
            (c < 1e-4 || c > 1e15) && (n = "scientific"), o = wa(i, e);
        }
        const r = tt(Math.abs(o)), a = Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
            notation: n,
            minimumFractionDigits: a,
            maximumFractionDigits: a
        };
        return Object.assign(l, this.options.ticks.format), de(i, s, l);
    },
    logarithmic (i, t, e) {
        if (i === 0) return "0";
        const s = i / Math.pow(10, Math.floor(tt(i)));
        return s === 1 || s === 2 || s === 5 ? Vn.numeric.call(this, i, t, e) : "";
    }
};
function wa(i, t) {
    let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
    return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var be = {
    formatters: Vn
};
O.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    grace: 0,
    grid: {
        display: !0,
        lineWidth: 1,
        drawBorder: !0,
        drawOnChartArea: !0,
        drawTicks: !0,
        tickLength: 8,
        tickWidth: (i, t)=>t.lineWidth,
        tickColor: (i, t)=>t.color,
        offset: !1,
        borderDash: [],
        borderDashOffset: 0,
        borderWidth: 1
    },
    title: {
        display: !1,
        text: "",
        padding: {
            top: 4,
            bottom: 4
        }
    },
    ticks: {
        minRotation: 0,
        maxRotation: 50,
        mirror: !1,
        textStrokeWidth: 0,
        textStrokeColor: "",
        padding: 3,
        display: !0,
        autoSkip: !0,
        autoSkipPadding: 3,
        labelOffset: 0,
        callback: be.formatters.values,
        minor: {},
        major: {},
        align: "center",
        crossAlign: "near",
        showLabelBackdrop: !1,
        backdropColor: "rgba(255, 255, 255, 0.75)",
        backdropPadding: 2
    }
});
O.route("scale.ticks", "color", "", "color");
O.route("scale.grid", "color", "", "borderColor");
O.route("scale.grid", "borderColor", "", "borderColor");
O.route("scale.title", "color", "", "color");
O.describe("scale", {
    _fallback: !1,
    _scriptable: (i)=>!i.startsWith("before") && !i.startsWith("after") && i !== "callback" && i !== "parser",
    _indexable: (i)=>i !== "borderDash" && i !== "tickBorderDash"
});
O.describe("scales", {
    _fallback: "scale"
});
O.describe("scale.ticks", {
    _scriptable: (i)=>i !== "backdropPadding" && i !== "callback",
    _indexable: (i)=>i !== "backdropPadding"
});
function Sa(i, t) {
    const e = i.options.ticks, s = e.maxTicksLimit || Pa(i), n = e.major.enabled ? Da(t) : [], o = n.length, r = n[0], a = n[o - 1], l = [];
    if (o > s) return Oa(t, l, n, o / s), l;
    const c = Ca(n, t, s);
    if (o > 0) {
        let h, d;
        const u = o > 1 ? Math.round((a - r) / (o - 1)) : null;
        for(Oe(t, l, c, T(u) ? 0 : r - u, r), h = 0, d = o - 1; h < d; h++)Oe(t, l, c, n[h], n[h + 1]);
        return Oe(t, l, c, a, T(u) ? t.length : a + u), l;
    }
    return Oe(t, l, c), l;
}
function Pa(i) {
    const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
    return Math.floor(Math.min(s, n));
}
function Ca(i, t, e) {
    const s = Aa(i), n = t.length / e;
    if (!s) return Math.max(n, 1);
    const o = Do(s);
    for(let r = 0, a = o.length - 1; r < a; r++){
        const l = o[r];
        if (l > n) return l;
    }
    return Math.max(n, 1);
}
function Da(i) {
    const t = [];
    let e, s;
    for(e = 0, s = i.length; e < s; e++)i[e].major && t.push(e);
    return t;
}
function Oa(i, t, e, s) {
    let n = 0, o = e[0], r;
    for(s = Math.ceil(s), r = 0; r < i.length; r++)r === o && (t.push(i[r]), n++, o = e[n * s]);
}
function Oe(i, t, e, s, n) {
    const o = C(s, 0), r = Math.min(C(n, i.length), i.length);
    let a = 0, l, c, h;
    for(e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0;)a++, h = Math.round(o + a * e);
    for(c = Math.max(o, 0); c < r; c++)c === h && (t.push(i[c]), a++, h = Math.round(o + a * e));
}
function Aa(i) {
    const t = i.length;
    let e, s;
    if (t < 2) return !1;
    for(s = i[0], e = 1; e < t; ++e)if (i[e] - i[e - 1] !== s) return !1;
    return s;
}
const Ta = (i)=>i === "left" ? "right" : i === "right" ? "left" : i, ws = (i, t, e)=>t === "top" || t === "left" ? i[t] + e : i[t] - e;
function Ss(i, t) {
    const e = [], s = i.length / t, n = i.length;
    let o = 0;
    for(; o < n; o += s)e.push(i[Math.floor(o)]);
    return e;
}
function La(i, t, e) {
    const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
    let l = i.getPixelForTick(n), c;
    if (!(e && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - a || l > r + a))) return l;
}
function Ra(i, t) {
    E(i, (e)=>{
        const s = e.gc, n = s.length / 2;
        let o;
        if (n > t) {
            for(o = 0; o < n; ++o)delete e.data[s[o]];
            s.splice(0, n);
        }
    });
}
function Xt(i) {
    return i.drawTicks ? i.tickLength : 0;
}
function Ps(i, t) {
    if (!i.display) return 0;
    const e = $(i.font, t), s = K(i.padding);
    return (z(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function Ea(i, t) {
    return vt(i, {
        scale: t,
        type: "scale"
    });
}
function Fa(i, t, e) {
    return vt(i, {
        tick: e,
        index: t,
        type: "tick"
    });
}
function Ia(i, t, e) {
    let s = Li(i);
    return (e && t !== "right" || !e && t === "right") && (s = Ta(s)), s;
}
function za(i, t, e, s) {
    const { top: n, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: h } = l;
    let d = 0, u, f, g;
    const p = r - n, m = a - o;
    if (i.isHorizontal()) {
        if (f = U(s, o, a), D(e)) {
            const b = Object.keys(e)[0], x = e[b];
            g = h[b].getPixelForValue(x) + p - t;
        } else e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = ws(i, e, t);
        u = a - o;
    } else {
        if (D(e)) {
            const b = Object.keys(e)[0], x = e[b];
            f = h[b].getPixelForValue(x) - m + t;
        } else e === "center" ? f = (c.left + c.right) / 2 - m + t : f = ws(i, e, t);
        g = U(s, r, n), d = e === "left" ? -V : V;
    }
    return {
        titleX: f,
        titleY: g,
        maxWidth: u,
        rotation: d
    };
}
class Mt extends st {
    constructor(t){
        super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
    }
    init(t) {
        this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
    }
    parse(t, e) {
        return t;
    }
    getUserBounds() {
        let { _userMin: t, _userMax: e, _suggestedMin: s, _suggestedMax: n } = this;
        return t = Q(t, Number.POSITIVE_INFINITY), e = Q(e, Number.NEGATIVE_INFINITY), s = Q(s, Number.POSITIVE_INFINITY), n = Q(n, Number.NEGATIVE_INFINITY), {
            min: Q(t, s),
            max: Q(e, n),
            minDefined: N(t),
            maxDefined: N(e)
        };
    }
    getMinMax(t) {
        let { min: e, max: s, minDefined: n, maxDefined: o } = this.getUserBounds(), r;
        if (n && o) return {
            min: e,
            max: s
        };
        const a = this.getMatchingVisibleMetas();
        for(let l = 0, c = a.length; l < c; ++l)r = a[l].controller.getMinMax(this, t), n || (e = Math.min(e, r.min)), o || (s = Math.max(s, r.max));
        return e = o && e > s ? s : e, s = n && e > s ? e : s, {
            min: Q(e, Q(s, e)),
            max: Q(s, Q(e, s))
        };
    }
    getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
        };
    }
    getTicks() {
        return this.ticks;
    }
    getLabels() {
        const t = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
    }
    beforeLayout() {
        this._cache = {}, this._dataLimitsCached = !1;
    }
    beforeUpdate() {
        I(this.options.beforeUpdate, [
            this
        ]);
    }
    update(t, e, s) {
        const { beginAtZero: n, grace: o, ticks: r } = this.options, a = r.sampleSize;
        this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = mr(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
        const l = a < this.ticks.length;
        this._convertTicksToLabels(l ? Ss(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = Sa(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
    }
    configure() {
        let t = this.options.reverse, e, s;
        this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
        I(this.options.afterUpdate, [
            this
        ]);
    }
    beforeSetDimensions() {
        I(this.options.beforeSetDimensions, [
            this
        ]);
    }
    setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
    }
    afterSetDimensions() {
        I(this.options.afterSetDimensions, [
            this
        ]);
    }
    _callHooks(t) {
        this.chart.notifyPlugins(t, this.getContext()), I(this.options[t], [
            this
        ]);
    }
    beforeDataLimits() {
        this._callHooks("beforeDataLimits");
    }
    determineDataLimits() {}
    afterDataLimits() {
        this._callHooks("afterDataLimits");
    }
    beforeBuildTicks() {
        this._callHooks("beforeBuildTicks");
    }
    buildTicks() {
        return [];
    }
    afterBuildTicks() {
        this._callHooks("afterBuildTicks");
    }
    beforeTickToLabelConversion() {
        I(this.options.beforeTickToLabelConversion, [
            this
        ]);
    }
    generateTickLabels(t) {
        const e = this.options.ticks;
        let s, n, o;
        for(s = 0, n = t.length; s < n; s++)o = t[s], o.label = I(e.callback, [
            o.value,
            s,
            t
        ], this);
    }
    afterTickToLabelConversion() {
        I(this.options.afterTickToLabelConversion, [
            this
        ]);
    }
    beforeCalculateLabelRotation() {
        I(this.options.beforeCalculateLabelRotation, [
            this
        ]);
    }
    calculateLabelRotation() {
        const t = this.options, e = t.ticks, s = this.ticks.length, n = e.minRotation || 0, o = e.maxRotation;
        let r = n, a, l, c;
        if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
            this.labelRotation = n;
            return;
        }
        const h = this._getLabelSizes(), d = h.widest.width, u = h.highest.height, f = Y(this.chart.width - d, 0, this.maxWidth);
        a = t.offset ? this.maxWidth / s : f / (s - 1), d + 6 > a && (a = f / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - Xt(t.grid) - e.padding - Ps(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), r = Ai(Math.min(Math.asin(Y((h.highest.height + 6) / a, -1, 1)), Math.asin(Y(l / c, -1, 1)) - Math.asin(Y(u / c, -1, 1)))), r = Math.max(n, Math.min(o, r))), this.labelRotation = r;
    }
    afterCalculateLabelRotation() {
        I(this.options.afterCalculateLabelRotation, [
            this
        ]);
    }
    afterAutoSkip() {}
    beforeFit() {
        I(this.options.beforeFit, [
            this
        ]);
    }
    fit() {
        const t = {
            width: 0,
            height: 0
        }, { chart: e, options: { ticks: s, title: n, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
        if (r) {
            const l = Ps(n, e.options.font);
            if (a ? (t.width = this.maxWidth, t.height = Xt(o) + l) : (t.height = this.maxHeight, t.width = Xt(o) + l), s.display && this.ticks.length) {
                const { first: c, last: h, widest: d, highest: u } = this._getLabelSizes(), f = s.padding * 2, g = nt(this.labelRotation), p = Math.cos(g), m = Math.sin(g);
                if (a) {
                    const b = s.mirror ? 0 : m * d.width + p * u.height;
                    t.height = Math.min(this.maxHeight, t.height + b + f);
                } else {
                    const b = s.mirror ? 0 : p * d.width + m * u.height;
                    t.width = Math.min(this.maxWidth, t.width + b + f);
                }
                this._calculatePadding(c, h, m, p);
            }
        }
        this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
    }
    _calculatePadding(t, e, s, n) {
        const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
        if (this.isHorizontal()) {
            const h = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
            let u = 0, f = 0;
            l ? c ? (u = n * t.width, f = s * e.height) : (u = s * t.height, f = n * e.width) : o === "start" ? f = e.width : o === "end" ? u = t.width : o !== "inner" && (u = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((u - h + r) * this.width / (this.width - h), 0), this.paddingRight = Math.max((f - d + r) * this.width / (this.width - d), 0);
        } else {
            let h = e.height / 2, d = t.height / 2;
            o === "start" ? (h = 0, d = t.height) : o === "end" && (h = e.height, d = 0), this.paddingTop = h + r, this.paddingBottom = d + r;
        }
    }
    _handleMargins() {
        this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
    }
    afterFit() {
        I(this.options.afterFit, [
            this
        ]);
    }
    isHorizontal() {
        const { axis: t, position: e } = this.options;
        return e === "top" || e === "bottom" || t === "x";
    }
    isFullSize() {
        return this.options.fullSize;
    }
    _convertTicksToLabels(t) {
        this.beforeTickToLabelConversion(), this.generateTickLabels(t);
        let e, s;
        for(e = 0, s = t.length; e < s; e++)T(t[e].label) && (t.splice(e, 1), s--, e--);
        this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
        let t = this._labelSizes;
        if (!t) {
            const e = this.options.ticks.sampleSize;
            let s = this.ticks;
            e < s.length && (s = Ss(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length);
        }
        return t;
    }
    _computeLabelSizes(t, e) {
        const { ctx: s, _longestTextCache: n } = this, o = [], r = [];
        let a = 0, l = 0, c, h, d, u, f, g, p, m, b, x, v;
        for(c = 0; c < e; ++c){
            if (u = t[c].label, f = this._resolveTickFontOptions(c), s.font = g = f.string, p = n[g] = n[g] || {
                data: {},
                gc: []
            }, m = f.lineHeight, b = x = 0, !T(u) && !z(u)) b = Ne(s, p.data, p.gc, b, u), x = m;
            else if (z(u)) for(h = 0, d = u.length; h < d; ++h)v = u[h], !T(v) && !z(v) && (b = Ne(s, p.data, p.gc, b, v), x += m);
            o.push(b), r.push(x), a = Math.max(b, a), l = Math.max(x, l);
        }
        Ra(n, e);
        const y = o.indexOf(a), _ = r.indexOf(l), M = (k)=>({
                width: o[k] || 0,
                height: r[k] || 0
            });
        return {
            first: M(0),
            last: M(e - 1),
            widest: M(y),
            highest: M(_),
            widths: o,
            heights: r
        };
    }
    getLabelForValue(t) {
        return t;
    }
    getPixelForValue(t, e) {
        return NaN;
    }
    getValueForPixel(t) {}
    getPixelForTick(t) {
        const e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
    }
    getPixelForDecimal(t) {
        this._reversePixels && (t = 1 - t);
        const e = this._startPixel + t * this._length;
        return To(this._alignToPixels ? wt(this.chart, e, 0) : e);
    }
    getDecimalForPixel(t) {
        const e = (t - this._startPixel) / this._length;
        return this._reversePixels ? 1 - e : e;
    }
    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
        const { min: t, max: e } = this;
        return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
    }
    getContext(t) {
        const e = this.ticks || [];
        if (t >= 0 && t < e.length) {
            const s = e[t];
            return s.$context || (s.$context = Fa(this.getContext(), t, s));
        }
        return this.$context || (this.$context = Ea(this.chart.getContext(), this));
    }
    _tickSize() {
        const t = this.options.ticks, e = nt(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
        return this.isHorizontal() ? l * s > a * n ? a / s : l / n : l * n < a * s ? l / s : a / n;
    }
    _isVisible() {
        const t = this.options.display;
        return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(t) {
        const e = this.axis, s = this.chart, n = this.options, { grid: o, position: r } = n, a = o.offset, l = this.isHorizontal(), h = this.ticks.length + (a ? 1 : 0), d = Xt(o), u = [], f = o.setContext(this.getContext()), g = f.drawBorder ? f.borderWidth : 0, p = g / 2, m = function(P) {
            return wt(s, P, g);
        };
        let b, x, v, y, _, M, k, S, w, L, R, A;
        if (r === "top") b = m(this.bottom), M = this.bottom - d, S = b - p, L = m(t.top) + p, A = t.bottom;
        else if (r === "bottom") b = m(this.top), L = t.top, A = m(t.bottom) - p, M = b + p, S = this.top + d;
        else if (r === "left") b = m(this.right), _ = this.right - d, k = b - p, w = m(t.left) + p, R = t.right;
        else if (r === "right") b = m(this.left), w = t.left, R = m(t.right) - p, _ = b + p, k = this.left + d;
        else if (e === "x") {
            if (r === "center") b = m((t.top + t.bottom) / 2 + 0.5);
            else if (D(r)) {
                const P = Object.keys(r)[0], j = r[P];
                b = m(this.chart.scales[P].getPixelForValue(j));
            }
            L = t.top, A = t.bottom, M = b + p, S = M + d;
        } else if (e === "y") {
            if (r === "center") b = m((t.left + t.right) / 2);
            else if (D(r)) {
                const P = Object.keys(r)[0], j = r[P];
                b = m(this.chart.scales[P].getPixelForValue(j));
            }
            _ = b - p, k = _ - d, w = t.left, R = t.right;
        }
        const H = C(n.ticks.maxTicksLimit, h), q = Math.max(1, Math.ceil(h / H));
        for(x = 0; x < h; x += q){
            const P = o.setContext(this.getContext(x)), j = P.lineWidth, W = P.color, kt = P.borderDash || [], ti = P.borderDashOffset, Rt = P.tickWidth, ke = P.tickColor, Et = P.tickBorderDash || [], jt = P.tickBorderDashOffset;
            v = La(this, x, a), v !== void 0 && (y = wt(s, v, j), l ? _ = k = w = R = y : M = S = L = A = y, u.push({
                tx1: _,
                ty1: M,
                tx2: k,
                ty2: S,
                x1: w,
                y1: L,
                x2: R,
                y2: A,
                width: j,
                color: W,
                borderDash: kt,
                borderDashOffset: ti,
                tickWidth: Rt,
                tickColor: ke,
                tickBorderDash: Et,
                tickBorderDashOffset: jt
            }));
        }
        return this._ticksLength = h, this._borderValue = b, u;
    }
    _computeLabelItems(t) {
        const e = this.axis, s = this.options, { position: n, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: h, mirror: d } = o, u = Xt(s.grid), f = u + h, g = d ? -h : f, p = -nt(this.labelRotation), m = [];
        let b, x, v, y, _, M, k, S, w, L, R, A, H = "middle";
        if (n === "top") M = this.bottom - g, k = this._getXAxisLabelAlignment();
        else if (n === "bottom") M = this.top + g, k = this._getXAxisLabelAlignment();
        else if (n === "left") {
            const P = this._getYAxisLabelAlignment(u);
            k = P.textAlign, _ = P.x;
        } else if (n === "right") {
            const P = this._getYAxisLabelAlignment(u);
            k = P.textAlign, _ = P.x;
        } else if (e === "x") {
            if (n === "center") M = (t.top + t.bottom) / 2 + f;
            else if (D(n)) {
                const P = Object.keys(n)[0], j = n[P];
                M = this.chart.scales[P].getPixelForValue(j) + f;
            }
            k = this._getXAxisLabelAlignment();
        } else if (e === "y") {
            if (n === "center") _ = (t.left + t.right) / 2 - f;
            else if (D(n)) {
                const P = Object.keys(n)[0], j = n[P];
                _ = this.chart.scales[P].getPixelForValue(j);
            }
            k = this._getYAxisLabelAlignment(u).textAlign;
        }
        e === "y" && (l === "start" ? H = "top" : l === "end" && (H = "bottom"));
        const q = this._getLabelSizes();
        for(b = 0, x = a.length; b < x; ++b){
            v = a[b], y = v.label;
            const P = o.setContext(this.getContext(b));
            S = this.getPixelForTick(b) + o.labelOffset, w = this._resolveTickFontOptions(b), L = w.lineHeight, R = z(y) ? y.length : 1;
            const j = R / 2, W = P.color, kt = P.textStrokeColor, ti = P.textStrokeWidth;
            let Rt = k;
            r ? (_ = S, k === "inner" && (b === x - 1 ? Rt = this.options.reverse ? "left" : "right" : b === 0 ? Rt = this.options.reverse ? "right" : "left" : Rt = "center"), n === "top" ? c === "near" || p !== 0 ? A = -R * L + L / 2 : c === "center" ? A = -q.highest.height / 2 - j * L + L : A = -q.highest.height + L / 2 : c === "near" || p !== 0 ? A = L / 2 : c === "center" ? A = q.highest.height / 2 - j * L : A = q.highest.height - R * L, d && (A *= -1)) : (M = S, A = (1 - R) * L / 2);
            let ke;
            if (P.showLabelBackdrop) {
                const Et = K(P.backdropPadding), jt = q.heights[b], ei = q.widths[b];
                let ii = M + A - Et.top, si = _ - Et.left;
                switch(H){
                    case "middle":
                        ii -= jt / 2;
                        break;
                    case "bottom":
                        ii -= jt;
                        break;
                }
                switch(k){
                    case "center":
                        si -= ei / 2;
                        break;
                    case "right":
                        si -= ei;
                        break;
                }
                ke = {
                    left: si,
                    top: ii,
                    width: ei + Et.width,
                    height: jt + Et.height,
                    color: P.backdropColor
                };
            }
            m.push({
                rotation: p,
                label: y,
                font: w,
                color: W,
                strokeColor: kt,
                strokeWidth: ti,
                textOffset: A,
                textAlign: Rt,
                textBaseline: H,
                translation: [
                    _,
                    M
                ],
                backdrop: ke
            });
        }
        return m;
    }
    _getXAxisLabelAlignment() {
        const { position: t, ticks: e } = this.options;
        if (-nt(this.labelRotation)) return t === "top" ? "left" : "right";
        let n = "center";
        return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n;
    }
    _getYAxisLabelAlignment(t) {
        const { position: e, ticks: { crossAlign: s, mirror: n, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
        let c, h;
        return e === "left" ? n ? (h = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - a, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? n ? (h = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + a, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
            textAlign: c,
            x: h
        };
    }
    _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        const t = this.chart, e = this.options.position;
        if (e === "left" || e === "right") return {
            top: 0,
            left: this.left,
            bottom: t.height,
            right: this.right
        };
        if (e === "top" || e === "bottom") return {
            top: this.top,
            left: 0,
            bottom: this.bottom,
            right: t.width
        };
    }
    drawBackground() {
        const { ctx: t, options: { backgroundColor: e }, left: s, top: n, width: o, height: r } = this;
        e && (t.save(), t.fillStyle = e, t.fillRect(s, n, o, r), t.restore());
    }
    getLineWidthForValue(t) {
        const e = this.options.grid;
        if (!this._isVisible() || !e.display) return 0;
        const n = this.ticks.findIndex((o)=>o.value === t);
        return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
    }
    drawGrid(t) {
        const e = this.options.grid, s = this.ctx, n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
        let o, r;
        const a = (l, c, h)=>{
            !h.width || !h.color || (s.save(), s.lineWidth = h.width, s.strokeStyle = h.color, s.setLineDash(h.borderDash || []), s.lineDashOffset = h.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
        };
        if (e.display) for(o = 0, r = n.length; o < r; ++o){
            const l = n[o];
            e.drawOnChartArea && a({
                x: l.x1,
                y: l.y1
            }, {
                x: l.x2,
                y: l.y2
            }, l), e.drawTicks && a({
                x: l.tx1,
                y: l.ty1
            }, {
                x: l.tx2,
                y: l.ty2
            }, {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset
            });
        }
    }
    drawBorder() {
        const { chart: t, ctx: e, options: { grid: s } } = this, n = s.setContext(this.getContext()), o = s.drawBorder ? n.borderWidth : 0;
        if (!o) return;
        const r = s.setContext(this.getContext(0)).lineWidth, a = this._borderValue;
        let l, c, h, d;
        this.isHorizontal() ? (l = wt(t, this.left, o) - o / 2, c = wt(t, this.right, r) + r / 2, h = d = a) : (h = wt(t, this.top, o) - o / 2, d = wt(t, this.bottom, r) + r / 2, l = c = a), e.save(), e.lineWidth = n.borderWidth, e.strokeStyle = n.borderColor, e.beginPath(), e.moveTo(l, h), e.lineTo(c, d), e.stroke(), e.restore();
    }
    drawLabels(t) {
        if (!this.options.ticks.display) return;
        const s = this.ctx, n = this._computeLabelArea();
        n && Xe(s, n);
        const o = this._labelItems || (this._labelItems = this._computeLabelItems(t));
        let r, a;
        for(r = 0, a = o.length; r < a; ++r){
            const l = o[r], c = l.font, h = l.label;
            l.backdrop && (s.fillStyle = l.backdrop.color, s.fillRect(l.backdrop.left, l.backdrop.top, l.backdrop.width, l.backdrop.height));
            let d = l.textOffset;
            Tt(s, h, 0, d, c, l);
        }
        n && Ue(s);
    }
    drawTitle() {
        const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
        if (!s.display) return;
        const o = $(s.font), r = K(s.padding), a = s.align;
        let l = o.lineHeight / 2;
        e === "bottom" || e === "center" || D(e) ? (l += r.bottom, z(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
        const { titleX: c, titleY: h, maxWidth: d, rotation: u } = za(this, l, e, a);
        Tt(t, s.text, 0, 0, o, {
            color: s.color,
            maxWidth: d,
            rotation: u,
            textAlign: Ia(a, e, n),
            textBaseline: "middle",
            translation: [
                c,
                h
            ]
        });
    }
    draw(t) {
        this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
    }
    _layers() {
        const t = this.options, e = t.ticks && t.ticks.z || 0, s = C(t.grid && t.grid.z, -1);
        return !this._isVisible() || this.draw !== Mt.prototype.draw ? [
            {
                z: e,
                draw: (n)=>{
                    this.draw(n);
                }
            }
        ] : [
            {
                z: s,
                draw: (n)=>{
                    this.drawBackground(), this.drawGrid(n), this.drawTitle();
                }
            },
            {
                z: s + 1,
                draw: ()=>{
                    this.drawBorder();
                }
            },
            {
                z: e,
                draw: (n)=>{
                    this.drawLabels(n);
                }
            }
        ];
    }
    getMatchingVisibleMetas(t) {
        const e = this.chart.getSortedVisibleDatasetMetas(), s = this.axis + "AxisID", n = [];
        let o, r;
        for(o = 0, r = e.length; o < r; ++o){
            const a = e[o];
            a[s] === this.id && (!t || a.type === t) && n.push(a);
        }
        return n;
    }
    _resolveTickFontOptions(t) {
        const e = this.options.ticks.setContext(this.getContext(t));
        return $(e.font);
    }
    _maxDigits() {
        const t = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / t;
    }
}
class Ae {
    constructor(t, e, s){
        this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
    }
    isForType(t) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
    }
    register(t) {
        const e = Object.getPrototypeOf(t);
        let s;
        Wa(e) && (s = this.register(e));
        const n = this.items, o = t.id, r = this.scope + "." + o;
        if (!o) throw new Error("class does not have id: " + t);
        return o in n || (n[o] = t, Ba(t, r, s), this.override && O.override(t.id, t.overrides)), r;
    }
    get(t) {
        return this.items[t];
    }
    unregister(t) {
        const e = this.items, s = t.id, n = this.scope;
        s in e && delete e[s], n && s in O[n] && (delete O[n][s], this.override && delete At[s]);
    }
}
function Ba(i, t, e) {
    const s = ne(/* @__PURE__ */ Object.create(null), [
        e ? O.get(e) : {},
        O.get(t),
        i.defaults
    ]);
    O.set(t, s), i.defaultRoutes && Va(t, i.defaultRoutes), i.descriptors && O.describe(t, i.descriptors);
}
function Va(i, t) {
    Object.keys(t).forEach((e)=>{
        const s = e.split("."), n = s.pop(), o = [
            i
        ].concat(s).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
        O.route(o, n, l, a);
    });
}
function Wa(i) {
    return "id" in i && "defaults" in i;
}
class Na {
    constructor(){
        this.controllers = new Ae(it, "datasets", !0), this.elements = new Ae(st, "elements"), this.plugins = new Ae(Object, "plugins"), this.scales = new Ae(Mt, "scales"), this._typedRegistries = [
            this.controllers,
            this.scales,
            this.elements
        ];
    }
    add(...t) {
        this._each("register", t);
    }
    remove(...t) {
        this._each("unregister", t);
    }
    addControllers(...t) {
        this._each("register", t, this.controllers);
    }
    addElements(...t) {
        this._each("register", t, this.elements);
    }
    addPlugins(...t) {
        this._each("register", t, this.plugins);
    }
    addScales(...t) {
        this._each("register", t, this.scales);
    }
    getController(t) {
        return this._get(t, this.controllers, "controller");
    }
    getElement(t) {
        return this._get(t, this.elements, "element");
    }
    getPlugin(t) {
        return this._get(t, this.plugins, "plugin");
    }
    getScale(t) {
        return this._get(t, this.scales, "scale");
    }
    removeControllers(...t) {
        this._each("unregister", t, this.controllers);
    }
    removeElements(...t) {
        this._each("unregister", t, this.elements);
    }
    removePlugins(...t) {
        this._each("unregister", t, this.plugins);
    }
    removeScales(...t) {
        this._each("unregister", t, this.scales);
    }
    _each(t, e, s) {
        [
            ...e
        ].forEach((n)=>{
            const o = s || this._getRegistryForType(n);
            s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : E(n, (r)=>{
                const a = s || this._getRegistryForType(r);
                this._exec(t, a, r);
            });
        });
    }
    _exec(t, e, s) {
        const n = Oi(t);
        I(s["before" + n], [], s), e[t](s), I(s["after" + n], [], s);
    }
    _getRegistryForType(t) {
        for(let e = 0; e < this._typedRegistries.length; e++){
            const s = this._typedRegistries[e];
            if (s.isForType(t)) return s;
        }
        return this.plugins;
    }
    _get(t, e, s) {
        const n = e.get(t);
        if (n === void 0) throw new Error('"' + t + '" is not a registered ' + s + ".");
        return n;
    }
}
var ot = new Na();
class xe extends it {
    update(t) {
        const e = this._cachedMeta, { data: s = [] } = e, n = this.chart._animationsDisabled;
        let { start: o, count: r } = pn(e, s, n);
        if (this._drawStart = o, this._drawCount = r, mn(e) && (o = 0, r = s.length), this.options.showLine) {
            const { dataset: a, _dataset: l } = e;
            a._chart = this.chart, a._datasetIndex = this.index, a._decimated = !!l._decimated, a.points = s;
            const c = this.resolveDatasetElementOptions(t);
            c.segment = this.options.segment, this.updateElement(a, void 0, {
                animated: !n,
                options: c
            }, t);
        }
        this.updateElements(s, o, r, t);
    }
    addElements() {
        const { showLine: t } = this.options;
        !this.datasetElementType && t && (this.datasetElementType = ot.getElement("line")), super.addElements();
    }
    updateElements(t, e, s, n) {
        const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, h = this.resolveDataElementOptions(e, n), d = this.getSharedOptions(h), u = this.includeOptions(n, d), f = r.axis, g = a.axis, { spanGaps: p, segment: m } = this.options, b = Bt(p) ? p : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || o || n === "none";
        let v = e > 0 && this.getParsed(e - 1);
        for(let y = e; y < e + s; ++y){
            const _ = t[y], M = this.getParsed(y), k = x ? _ : {}, S = T(M[g]), w = k[f] = r.getPixelForValue(M[f], y), L = k[g] = o || S ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, M, l) : M[g], y);
            k.skip = isNaN(w) || isNaN(L) || S, k.stop = y > 0 && Math.abs(M[f] - v[f]) > b, m && (k.parsed = M, k.raw = c.data[y]), u && (k.options = d || this.resolveDataElementOptions(y, _.active ? "active" : n)), x || this.updateElement(_, y, k, n), v = M;
        }
        this.updateSharedOptions(d, n, h);
    }
    getMaxOverflow() {
        const t = this._cachedMeta, e = t.data || [];
        if (!this.options.showLine) {
            let a = 0;
            for(let l = e.length - 1; l >= 0; --l)a = Math.max(a, e[l].size(this.resolveDataElementOptions(l)) / 2);
            return a > 0 && a;
        }
        const s = t.dataset, n = s.options && s.options.borderWidth || 0;
        if (!e.length) return n;
        const o = e[0].size(this.resolveDataElementOptions(0)), r = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
        return Math.max(n, o, r) / 2;
    }
}
xe.id = "scatter";
xe.defaults = {
    datasetElementType: !1,
    dataElementType: "point",
    showLine: !1,
    fill: !1
};
xe.overrides = {
    interaction: {
        mode: "point"
    },
    plugins: {
        tooltip: {
            callbacks: {
                title () {
                    return "";
                },
                label (i) {
                    return "(" + i.label + ", " + i.formattedValue + ")";
                }
            }
        }
    },
    scales: {
        x: {
            type: "linear"
        },
        y: {
            type: "linear"
        }
    }
};
var Wn = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    BarController: ue,
    BubbleController: fe,
    DoughnutController: Lt,
    LineController: ge,
    PolarAreaController: pe,
    PieController: qe,
    RadarController: me,
    ScatterController: xe
});
function St() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class vi {
    constructor(t){
        this.options = t || {};
    }
    init(t) {}
    formats() {
        return St();
    }
    parse(t, e) {
        return St();
    }
    format(t, e) {
        return St();
    }
    add(t, e, s) {
        return St();
    }
    diff(t, e, s) {
        return St();
    }
    startOf(t, e, s) {
        return St();
    }
    endOf(t, e) {
        return St();
    }
}
vi.override = function(i) {
    Object.assign(vi.prototype, i);
};
var Nn = {
    _date: vi
};
function Ha(i, t, e, s) {
    const { controller: n, data: o, _sorted: r } = i, a = n._cachedMeta.iScale;
    if (a && t === a.axis && t !== "r" && r && o.length) {
        const l = a._reversePixels ? Lo : ft;
        if (s) {
            if (n._sharedOptions) {
                const c = o[0], h = typeof c.getRange == "function" && c.getRange(t);
                if (h) {
                    const d = l(o, t, e - h), u = l(o, t, e + h);
                    return {
                        lo: d.lo,
                        hi: u.hi
                    };
                }
            }
        } else return l(o, t, e);
    }
    return {
        lo: 0,
        hi: o.length - 1
    };
}
function _e(i, t, e, s, n) {
    const o = i.getSortedVisibleDatasetMetas(), r = e[t];
    for(let a = 0, l = o.length; a < l; ++a){
        const { index: c, data: h } = o[a], { lo: d, hi: u } = Ha(o[a], t, r, n);
        for(let f = d; f <= u; ++f){
            const g = h[f];
            g.skip || s(g, c, f);
        }
    }
}
function ja(i) {
    const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
    return function(s, n) {
        const o = t ? Math.abs(s.x - n.x) : 0, r = e ? Math.abs(s.y - n.y) : 0;
        return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
    };
}
function di(i, t, e, s, n) {
    const o = [];
    return !n && !i.isPointInArea(t) || _e(i, e, t, function(a, l, c) {
        !n && !re(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
            element: a,
            datasetIndex: l,
            index: c
        });
    }, !0), o;
}
function $a(i, t, e, s) {
    let n = [];
    function o(r, a, l) {
        const { startAngle: c, endAngle: h } = r.getProps([
            "startAngle",
            "endAngle"
        ], s), { angle: d } = hn(r, {
            x: t.x,
            y: t.y
        });
        oe(d, c, h) && n.push({
            element: r,
            datasetIndex: a,
            index: l
        });
    }
    return _e(i, e, t, o), n;
}
function Ya(i, t, e, s, n, o) {
    let r = [];
    const a = ja(e);
    let l = Number.POSITIVE_INFINITY;
    function c(h, d, u) {
        const f = h.inRange(t.x, t.y, n);
        if (s && !f) return;
        const g = h.getCenterPoint(n);
        if (!(!!o || i.isPointInArea(g)) && !f) return;
        const m = a(t, g);
        m < l ? (r = [
            {
                element: h,
                datasetIndex: d,
                index: u
            }
        ], l = m) : m === l && r.push({
            element: h,
            datasetIndex: d,
            index: u
        });
    }
    return _e(i, e, t, c), r;
}
function ui(i, t, e, s, n, o) {
    return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? $a(i, t, e, n) : Ya(i, t, e, s, n, o);
}
function Cs(i, t, e, s, n) {
    const o = [], r = e === "x" ? "inXRange" : "inYRange";
    let a = !1;
    return _e(i, e, t, (l, c, h)=>{
        l[r](t[e], n) && (o.push({
            element: l,
            datasetIndex: c,
            index: h
        }), a = a || l.inRange(t.x, t.y, n));
    }), s && !a ? [] : o;
}
var Hn = {
    evaluateInteractionItems: _e,
    modes: {
        index (i, t, e, s) {
            const n = Pt(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? di(i, n, o, s, r) : ui(i, n, o, !1, s, r), l = [];
            return a.length ? (i.getSortedVisibleDatasetMetas().forEach((c)=>{
                const h = a[0].index, d = c.data[h];
                d && !d.skip && l.push({
                    element: d,
                    datasetIndex: c.index,
                    index: h
                });
            }), l) : [];
        },
        dataset (i, t, e, s) {
            const n = Pt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
            let a = e.intersect ? di(i, n, o, s, r) : ui(i, n, o, !1, s, r);
            if (a.length > 0) {
                const l = a[0].datasetIndex, c = i.getDatasetMeta(l).data;
                a = [];
                for(let h = 0; h < c.length; ++h)a.push({
                    element: c[h],
                    datasetIndex: l,
                    index: h
                });
            }
            return a;
        },
        point (i, t, e, s) {
            const n = Pt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
            return di(i, n, o, s, r);
        },
        nearest (i, t, e, s) {
            const n = Pt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
            return ui(i, n, o, e.intersect, s, r);
        },
        x (i, t, e, s) {
            const n = Pt(t, i);
            return Cs(i, n, "x", e.intersect, s);
        },
        y (i, t, e, s) {
            const n = Pt(t, i);
            return Cs(i, n, "y", e.intersect, s);
        }
    }
};
const jn = [
    "left",
    "top",
    "right",
    "bottom"
];
function Ut(i, t) {
    return i.filter((e)=>e.pos === t);
}
function Ds(i, t) {
    return i.filter((e)=>jn.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Kt(i, t) {
    return i.sort((e, s)=>{
        const n = t ? s : e, o = t ? e : s;
        return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
    });
}
function Xa(i) {
    const t = [];
    let e, s, n, o, r, a;
    for(e = 0, s = (i || []).length; e < s; ++e)n = i[e], ({ position: o, options: { stack: r, stackWeight: a = 1 } } = n), t.push({
        index: e,
        box: n,
        pos: o,
        horizontal: n.isHorizontal(),
        weight: n.weight,
        stack: r && o + r,
        stackWeight: a
    });
    return t;
}
function Ua(i) {
    const t = {};
    for (const e of i){
        const { stack: s, pos: n, stackWeight: o } = e;
        if (!s || !jn.includes(n)) continue;
        const r = t[s] || (t[s] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
        });
        r.count++, r.weight += o;
    }
    return t;
}
function Ka(i, t) {
    const e = Ua(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
    let o, r, a;
    for(o = 0, r = i.length; o < r; ++o){
        a = i[o];
        const { fullSize: l } = a.box, c = e[a.stack], h = c && a.stackWeight / c.weight;
        a.horizontal ? (a.width = h ? h * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = h ? h * n : l && t.availableHeight);
    }
    return e;
}
function qa(i) {
    const t = Xa(i), e = Kt(t.filter((c)=>c.box.fullSize), !0), s = Kt(Ut(t, "left"), !0), n = Kt(Ut(t, "right")), o = Kt(Ut(t, "top"), !0), r = Kt(Ut(t, "bottom")), a = Ds(t, "x"), l = Ds(t, "y");
    return {
        fullSize: e,
        leftAndTop: s.concat(o),
        rightAndBottom: n.concat(l).concat(r).concat(a),
        chartArea: Ut(t, "chartArea"),
        vertical: s.concat(n).concat(l),
        horizontal: o.concat(r).concat(a)
    };
}
function Os(i, t, e, s) {
    return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function $n(i, t) {
    i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function Ga(i, t, e, s) {
    const { pos: n, box: o } = e, r = i.maxPadding;
    if (!D(n)) {
        e.size && (i[n] -= e.size);
        const d = s[e.stack] || {
            size: 0,
            count: 1
        };
        d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[n] += e.size;
    }
    o.getPadding && $n(r, o.getPadding());
    const a = Math.max(0, t.outerWidth - Os(r, i, "left", "right")), l = Math.max(0, t.outerHeight - Os(r, i, "top", "bottom")), c = a !== i.w, h = l !== i.h;
    return i.w = a, i.h = l, e.horizontal ? {
        same: c,
        other: h
    } : {
        same: h,
        other: c
    };
}
function Za(i) {
    const t = i.maxPadding;
    function e(s) {
        const n = Math.max(t[s] - i[s], 0);
        return i[s] += n, n;
    }
    i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function Ja(i, t) {
    const e = t.maxPadding;
    function s(n) {
        const o = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        return n.forEach((r)=>{
            o[r] = Math.max(t[r], e[r]);
        }), o;
    }
    return s(i ? [
        "left",
        "right"
    ] : [
        "top",
        "bottom"
    ]);
}
function Jt(i, t, e, s) {
    const n = [];
    let o, r, a, l, c, h;
    for(o = 0, r = i.length, c = 0; o < r; ++o){
        a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, Ja(a.horizontal, t));
        const { same: d, other: u } = Ga(t, e, a, s);
        c |= d && n.length, h = h || u, l.fullSize || n.push(a);
    }
    return c && Jt(n, t, e, s) || h;
}
function Te(i, t, e, s, n) {
    i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function As(i, t, e, s) {
    const n = e.padding;
    let { x: o, y: r } = t;
    for (const a of i){
        const l = a.box, c = s[a.stack] || {
            count: 1,
            placed: 0,
            weight: 1
        }, h = a.stackWeight / c.weight || 1;
        if (a.horizontal) {
            const d = t.w * h, u = c.size || l.height;
            et(c.start) && (r = c.start), l.fullSize ? Te(l, n.left, r, e.outerWidth - n.right - n.left, u) : Te(l, t.left + c.placed, r, d, u), c.start = r, c.placed += d, r = l.bottom;
        } else {
            const d = t.h * h, u = c.size || l.width;
            et(c.start) && (o = c.start), l.fullSize ? Te(l, o, n.top, u, e.outerHeight - n.bottom - n.top) : Te(l, o, t.top + c.placed, u, d), c.start = o, c.placed += d, o = l.right;
        }
    }
    t.x = o, t.y = r;
}
O.set("layout", {
    autoPadding: !0,
    padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
});
var X = {
    addBox (i, t) {
        i.boxes || (i.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
            return [
                {
                    z: 0,
                    draw (e) {
                        t.draw(e);
                    }
                }
            ];
        }, i.boxes.push(t);
    },
    removeBox (i, t) {
        const e = i.boxes ? i.boxes.indexOf(t) : -1;
        e !== -1 && i.boxes.splice(e, 1);
    },
    configure (i, t, e) {
        t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
    },
    update (i, t, e, s) {
        if (!i) return;
        const n = K(i.options.layout.padding), o = Math.max(t - n.width, 0), r = Math.max(e - n.height, 0), a = qa(i.boxes), l = a.vertical, c = a.horizontal;
        E(i.boxes, (p)=>{
            typeof p.beforeLayout == "function" && p.beforeLayout();
        });
        const h = l.reduce((p, m)=>m.box.options && m.box.options.display === !1 ? p : p + 1, 0) || 1, d = Object.freeze({
            outerWidth: t,
            outerHeight: e,
            padding: n,
            availableWidth: o,
            availableHeight: r,
            vBoxMaxWidth: o / 2 / h,
            hBoxMaxHeight: r / 2
        }), u = Object.assign({}, n);
        $n(u, K(s));
        const f = Object.assign({
            maxPadding: u,
            w: o,
            h: r,
            x: n.left,
            y: n.top
        }, n), g = Ka(l.concat(c), d);
        Jt(a.fullSize, f, d, g), Jt(l, f, d, g), Jt(c, f, d, g) && Jt(l, f, d, g), Za(f), As(a.leftAndTop, f, d, g), f.x += f.w, f.y += f.h, As(a.rightAndBottom, f, d, g), i.chartArea = {
            left: f.left,
            top: f.top,
            right: f.left + f.w,
            bottom: f.top + f.h,
            height: f.h,
            width: f.w
        }, E(a.chartArea, (p)=>{
            const m = p.box;
            Object.assign(m, i.chartArea), m.update(f.w, f.h, {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            });
        });
    }
};
class Hi {
    acquireContext(t, e) {}
    releaseContext(t) {
        return !1;
    }
    addEventListener(t, e, s) {}
    removeEventListener(t, e, s) {}
    getDevicePixelRatio() {
        return 1;
    }
    getMaximumSize(t, e, s, n) {
        return e = Math.max(0, e || t.width), s = s || t.height, {
            width: e,
            height: Math.max(0, n ? Math.floor(e / n) : s)
        };
    }
    isAttached(t) {
        return !0;
    }
    updateConfig(t) {}
}
class Yn extends Hi {
    acquireContext(t) {
        return t && t.getContext && t.getContext("2d") || null;
    }
    updateConfig(t) {
        t.options.animation = !1;
    }
}
const Ie = "$chartjs", Qa = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
}, Ts = (i)=>i === null || i === "";
function tl(i, t) {
    const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
    if (i[Ie] = {
        initial: {
            height: s,
            width: n,
            style: {
                display: e.display,
                height: e.height,
                width: e.width
            }
        }
    }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Ts(n)) {
        const o = cs(i, "width");
        o !== void 0 && (i.width = o);
    }
    if (Ts(s)) {
        if (i.style.height === "") i.height = i.width / (t || 2);
        else {
            const o = cs(i, "height");
            o !== void 0 && (i.height = o);
        }
    }
    return i;
}
const Xn = Vr ? {
    passive: !0
} : !1;
function el(i, t, e) {
    i.addEventListener(t, e, Xn);
}
function il(i, t, e) {
    i.canvas.removeEventListener(t, e, Xn);
}
function sl(i, t) {
    const e = Qa[i.type] || i.type, { x: s, y: n } = Pt(i, t);
    return {
        type: e,
        chart: t,
        native: i,
        x: s !== void 0 ? s : null,
        y: n !== void 0 ? n : null
    };
}
function je(i, t) {
    for (const e of i)if (e === t || e.contains(t)) return !0;
}
function nl(i, t, e) {
    const s = i.canvas, n = new MutationObserver((o)=>{
        let r = !1;
        for (const a of o)r = r || je(a.addedNodes, s), r = r && !je(a.removedNodes, s);
        r && e();
    });
    return n.observe(document, {
        childList: !0,
        subtree: !0
    }), n;
}
function ol(i, t, e) {
    const s = i.canvas, n = new MutationObserver((o)=>{
        let r = !1;
        for (const a of o)r = r || je(a.removedNodes, s), r = r && !je(a.addedNodes, s);
        r && e();
    });
    return n.observe(document, {
        childList: !0,
        subtree: !0
    }), n;
}
const le = /* @__PURE__ */ new Map();
let Ls = 0;
function Un() {
    const i = window.devicePixelRatio;
    i !== Ls && (Ls = i, le.forEach((t, e)=>{
        e.currentDevicePixelRatio !== i && t();
    }));
}
function rl(i, t) {
    le.size || window.addEventListener("resize", Un), le.set(i, t);
}
function al(i) {
    le.delete(i), le.size || window.removeEventListener("resize", Un);
}
function ll(i, t, e) {
    const s = i.canvas, n = s && Wi(s);
    if (!n) return;
    const o = gn((a, l)=>{
        const c = n.clientWidth;
        e(a, l), c < n.clientWidth && e();
    }, window), r = new ResizeObserver((a)=>{
        const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
        c === 0 && h === 0 || o(c, h);
    });
    return r.observe(n), rl(i, o), r;
}
function fi(i, t, e) {
    e && e.disconnect(), t === "resize" && al(i);
}
function cl(i, t, e) {
    const s = i.canvas, n = gn((o)=>{
        i.ctx !== null && e(sl(o, i));
    }, i, (o)=>{
        const r = o[0];
        return [
            r,
            r.offsetX,
            r.offsetY
        ];
    });
    return el(s, t, n), n;
}
class Kn extends Hi {
    acquireContext(t, e) {
        const s = t && t.getContext && t.getContext("2d");
        return s && s.canvas === t ? (tl(t, e), s) : null;
    }
    releaseContext(t) {
        const e = t.canvas;
        if (!e[Ie]) return !1;
        const s = e[Ie].initial;
        [
            "height",
            "width"
        ].forEach((o)=>{
            const r = s[o];
            T(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
        });
        const n = s.style || {};
        return Object.keys(n).forEach((o)=>{
            e.style[o] = n[o];
        }), e.width = e.width, delete e[Ie], !0;
    }
    addEventListener(t, e, s) {
        this.removeEventListener(t, e);
        const n = t.$proxies || (t.$proxies = {}), r = {
            attach: nl,
            detach: ol,
            resize: ll
        }[e] || cl;
        n[e] = r(t, e, s);
    }
    removeEventListener(t, e) {
        const s = t.$proxies || (t.$proxies = {}), n = s[e];
        if (!n) return;
        (({
            attach: fi,
            detach: fi,
            resize: fi
        })[e] || il)(t, e, n), s[e] = void 0;
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio;
    }
    getMaximumSize(t, e, s, n) {
        return Br(t, e, s, n);
    }
    isAttached(t) {
        const e = Wi(t);
        return !!(e && e.isConnected);
    }
}
function qn(i) {
    return !An() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? Yn : Kn;
}
class hl {
    constructor(){
        this._init = [];
    }
    notify(t, e, s, n) {
        e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
        const o = n ? this._descriptors(t).filter(n) : this._descriptors(t), r = this._notify(o, t, e, s);
        return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), r;
    }
    _notify(t, e, s, n) {
        n = n || {};
        for (const o of t){
            const r = o.plugin, a = r[s], l = [
                e,
                n,
                o.options
            ];
            if (I(a, l, r) === !1 && n.cancelable) return !1;
        }
        return !0;
    }
    invalidate() {
        T(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
    }
    _descriptors(t) {
        if (this._cache) return this._cache;
        const e = this._cache = this._createDescriptors(t);
        return this._notifyStateChanges(t), e;
    }
    _createDescriptors(t, e) {
        const s = t && t.config, n = C(s.options && s.options.plugins, {}), o = dl(s);
        return n === !1 && !e ? [] : fl(t, o, n, e);
    }
    _notifyStateChanges(t) {
        const e = this._oldCache || [], s = this._cache, n = (o, r)=>o.filter((a)=>!r.some((l)=>a.plugin.id === l.plugin.id));
        this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
    }
}
function dl(i) {
    const t = {}, e = [], s = Object.keys(ot.plugins.items);
    for(let o = 0; o < s.length; o++)e.push(ot.getPlugin(s[o]));
    const n = i.plugins || [];
    for(let o = 0; o < n.length; o++){
        const r = n[o];
        e.indexOf(r) === -1 && (e.push(r), t[r.id] = !0);
    }
    return {
        plugins: e,
        localIds: t
    };
}
function ul(i, t) {
    return !t && i === !1 ? null : i === !0 ? {} : i;
}
function fl(i, { plugins: t, localIds: e }, s, n) {
    const o = [], r = i.getContext();
    for (const a of t){
        const l = a.id, c = ul(s[l], n);
        c !== null && o.push({
            plugin: a,
            options: gl(i.config, {
                plugin: a,
                local: e[l]
            }, c, r)
        });
    }
    return o;
}
function gl(i, { plugin: t, local: e }, s, n) {
    const o = i.pluginScopeKeys(t), r = i.getOptionScopes(s, o);
    return e && t.defaults && r.push(t.defaults), i.createResolver(r, n, [
        ""
    ], {
        scriptable: !1,
        indexable: !1,
        allKeys: !0
    });
}
function Mi(i, t) {
    const e = O.datasets[i] || {};
    return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function pl(i, t) {
    let e = i;
    return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function ml(i, t) {
    return i === t ? "_index_" : "_value_";
}
function bl(i) {
    if (i === "top" || i === "bottom") return "x";
    if (i === "left" || i === "right") return "y";
}
function ki(i, t) {
    return i === "x" || i === "y" ? i : t.axis || bl(t.position) || i.charAt(0).toLowerCase();
}
function xl(i, t) {
    const e = At[i.type] || {
        scales: {}
    }, s = t.scales || {}, n = Mi(i.type, t), o = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
    return Object.keys(s).forEach((a)=>{
        const l = s[a];
        if (!D(l)) return console.error(`Invalid scale configuration for scale: ${a}`);
        if (l._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${a}`);
        const c = ki(a, l), h = ml(c, n), d = e.scales || {};
        o[c] = o[c] || a, r[a] = Qt(/* @__PURE__ */ Object.create(null), [
            {
                axis: c
            },
            l,
            d[c],
            d[h]
        ]);
    }), i.data.datasets.forEach((a)=>{
        const l = a.type || i.type, c = a.indexAxis || Mi(l, t), d = (At[l] || {}).scales || {};
        Object.keys(d).forEach((u)=>{
            const f = pl(u, c), g = a[f + "AxisID"] || o[f] || f;
            r[g] = r[g] || /* @__PURE__ */ Object.create(null), Qt(r[g], [
                {
                    axis: f
                },
                s[g],
                d[u]
            ]);
        });
    }), Object.keys(r).forEach((a)=>{
        const l = r[a];
        Qt(l, [
            O.scales[l.type],
            O.scale
        ]);
    }), r;
}
function Gn(i) {
    const t = i.options || (i.options = {});
    t.plugins = C(t.plugins, {}), t.scales = xl(i, t);
}
function Zn(i) {
    return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function _l(i) {
    return i = i || {}, i.data = Zn(i.data), Gn(i), i;
}
const Rs = /* @__PURE__ */ new Map(), Jn = /* @__PURE__ */ new Set();
function Le(i, t) {
    let e = Rs.get(i);
    return e || (e = t(), Rs.set(i, e), Jn.add(e)), e;
}
const qt = (i, t, e)=>{
    const s = _t(t, e);
    s !== void 0 && i.add(s);
};
class yl {
    constructor(t){
        this._config = _l(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
    }
    get platform() {
        return this._config.platform;
    }
    get type() {
        return this._config.type;
    }
    set type(t) {
        this._config.type = t;
    }
    get data() {
        return this._config.data;
    }
    set data(t) {
        this._config.data = Zn(t);
    }
    get options() {
        return this._config.options;
    }
    set options(t) {
        this._config.options = t;
    }
    get plugins() {
        return this._config.plugins;
    }
    update() {
        const t = this._config;
        this.clearCache(), Gn(t);
    }
    clearCache() {
        this._scopeCache.clear(), this._resolverCache.clear();
    }
    datasetScopeKeys(t) {
        return Le(t, ()=>[
                [
                    `datasets.${t}`,
                    ""
                ]
            ]);
    }
    datasetAnimationScopeKeys(t, e) {
        return Le(`${t}.transition.${e}`, ()=>[
                [
                    `datasets.${t}.transitions.${e}`,
                    `transitions.${e}`
                ],
                [
                    `datasets.${t}`,
                    ""
                ]
            ]);
    }
    datasetElementScopeKeys(t, e) {
        return Le(`${t}-${e}`, ()=>[
                [
                    `datasets.${t}.elements.${e}`,
                    `datasets.${t}`,
                    `elements.${e}`,
                    ""
                ]
            ]);
    }
    pluginScopeKeys(t) {
        const e = t.id, s = this.type;
        return Le(`${s}-plugin-${e}`, ()=>[
                [
                    `plugins.${e}`,
                    ...t.additionalOptionScopes || []
                ]
            ]);
    }
    _cachedScopes(t, e) {
        const s = this._scopeCache;
        let n = s.get(t);
        return (!n || e) && (n = /* @__PURE__ */ new Map(), s.set(t, n)), n;
    }
    getOptionScopes(t, e, s) {
        const { options: n, type: o } = this, r = this._cachedScopes(t, s), a = r.get(e);
        if (a) return a;
        const l = /* @__PURE__ */ new Set();
        e.forEach((h)=>{
            t && (l.add(t), h.forEach((d)=>qt(l, t, d))), h.forEach((d)=>qt(l, n, d)), h.forEach((d)=>qt(l, At[o] || {}, d)), h.forEach((d)=>qt(l, O, d)), h.forEach((d)=>qt(l, _i, d));
        });
        const c = Array.from(l);
        return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Jn.has(e) && r.set(e, c), c;
    }
    chartOptionScopes() {
        const { options: t, type: e } = this;
        return [
            t,
            At[e] || {},
            O.datasets[e] || {},
            {
                type: e
            },
            O,
            _i
        ];
    }
    resolveNamedOptions(t, e, s, n = [
        ""
    ]) {
        const o = {
            $shared: !0
        }, { resolver: r, subPrefixes: a } = Es(this._resolverCache, t, n);
        let l = r;
        if (Ml(r, e)) {
            o.$shared = !1, s = yt(s) ? s() : s;
            const c = this.createResolver(t, s, a);
            l = Vt(r, s, c);
        }
        for (const c of e)o[c] = l[c];
        return o;
    }
    createResolver(t, e, s = [
        ""
    ], n) {
        const { resolver: o } = Es(this._resolverCache, t, s);
        return D(e) ? Vt(o, e, void 0, n) : o;
    }
}
function Es(i, t, e) {
    let s = i.get(t);
    s || (s = /* @__PURE__ */ new Map(), i.set(t, s));
    const n = e.join();
    let o = s.get(n);
    return o || (o = {
        resolver: zi(t, e),
        subPrefixes: e.filter((a)=>!a.toLowerCase().includes("hover"))
    }, s.set(n, o)), o;
}
const vl = (i)=>D(i) && Object.getOwnPropertyNames(i).reduce((t, e)=>t || yt(i[e]), !1);
function Ml(i, t) {
    const { isScriptable: e, isIndexable: s } = wn(i);
    for (const n of t){
        const o = e(n), r = s(n), a = (r || o) && i[n];
        if (o && (yt(a) || vl(a)) || r && z(a)) return !0;
    }
    return !1;
}
var kl = "3.9.1";
const wl = [
    "top",
    "bottom",
    "left",
    "right",
    "chartArea"
];
function Fs(i, t) {
    return i === "top" || i === "bottom" || wl.indexOf(i) === -1 && t === "x";
}
function Is(i, t) {
    return function(e, s) {
        return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
    };
}
function zs(i) {
    const t = i.chart, e = t.options.animation;
    t.notifyPlugins("afterRender"), I(e && e.onComplete, [
        i
    ], t);
}
function Sl(i) {
    const t = i.chart, e = t.options.animation;
    I(e && e.onProgress, [
        i
    ], t);
}
function Qn(i) {
    return An() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const $e = {}, to = (i)=>{
    const t = Qn(i);
    return Object.values($e).filter((e)=>e.canvas === t).pop();
};
function Pl(i, t, e) {
    const s = Object.keys(i);
    for (const n of s){
        const o = +n;
        if (o >= t) {
            const r = i[n];
            delete i[n], (e > 0 || o > t) && (i[o + e] = r);
        }
    }
}
function Cl(i, t, e, s) {
    return !e || i.type === "mouseout" ? null : s ? t : i;
}
class ji {
    constructor(t, e){
        const s = this.config = new yl(e), n = Qn(t), o = to(n);
        if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
        const r = s.createResolver(s.chartOptionScopes(), this.getContext());
        this.platform = new (s.platform || qn(n))(), this.platform.updateConfig(s);
        const a = this.platform.acquireContext(n, r.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
        if (this.id = _o(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new hl(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Fo((d)=>this.update(d), r.resizeDelay || 0), this._dataChanges = [], $e[this.id] = this, !a || !l) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return;
        }
        at.listen(this, "complete", zs), at.listen(this, "progress", Sl), this._initialize(), this.attached && this.update();
    }
    get aspectRatio() {
        const { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n, _aspectRatio: o } = this;
        return T(t) ? e && o ? o : n ? s / n : null : t;
    }
    get data() {
        return this.config.data;
    }
    set data(t) {
        this.config.data = t;
    }
    get options() {
        return this._options;
    }
    set options(t) {
        this.config.options = t;
    }
    _initialize() {
        return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : ls(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
    }
    clear() {
        return os(this.canvas, this.ctx), this;
    }
    stop() {
        return at.stop(this), this;
    }
    resize(t, e) {
        at.running(this) ? this._resizeBeforeDraw = {
            width: t,
            height: e
        } : this._resize(t, e);
    }
    _resize(t, e) {
        const s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(n, t, e, o), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
        this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, ls(this, a, !0) && (this.notifyPlugins("resize", {
            size: r
        }), I(s.onResize, [
            this,
            r
        ], this), this.attached && this._doResize(l) && this.render());
    }
    ensureScalesHaveIDs() {
        const e = this.options.scales || {};
        E(e, (s, n)=>{
            s.id = n;
        });
    }
    buildOrUpdateScales() {
        const t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((r, a)=>(r[a] = !1, r), {});
        let o = [];
        e && (o = o.concat(Object.keys(e).map((r)=>{
            const a = e[r], l = ki(r, a), c = l === "r", h = l === "x";
            return {
                options: a,
                dposition: c ? "chartArea" : h ? "bottom" : "left",
                dtype: c ? "radialLinear" : h ? "category" : "linear"
            };
        }))), E(o, (r)=>{
            const a = r.options, l = a.id, c = ki(l, a), h = C(a.type, r.dtype);
            (a.position === void 0 || Fs(a.position, c) !== Fs(r.dposition)) && (a.position = r.dposition), n[l] = !0;
            let d = null;
            if (l in s && s[l].type === h) d = s[l];
            else {
                const u = ot.getScale(h);
                d = new u({
                    id: l,
                    type: h,
                    ctx: this.ctx,
                    chart: this
                }), s[d.id] = d;
            }
            d.init(a, t);
        }), E(n, (r, a)=>{
            r || delete s[a];
        }), E(s, (r)=>{
            X.configure(this, r, r.options), X.addBox(this, r);
        });
    }
    _updateMetasets() {
        const t = this._metasets, e = this.data.datasets.length, s = t.length;
        if (t.sort((n, o)=>n.index - o.index), s > e) {
            for(let n = e; n < s; ++n)this._destroyDatasetMeta(n);
            t.splice(e, s - e);
        }
        this._sortedMetasets = t.slice(0).sort(Is("order", "index"));
    }
    _removeUnreferencedMetasets() {
        const { _metasets: t, data: { datasets: e } } = this;
        t.length > e.length && delete this._stacks, t.forEach((s, n)=>{
            e.filter((o)=>o === s._dataset).length === 0 && this._destroyDatasetMeta(n);
        });
    }
    buildOrUpdateControllers() {
        const t = [], e = this.data.datasets;
        let s, n;
        for(this._removeUnreferencedMetasets(), s = 0, n = e.length; s < n; s++){
            const o = e[s];
            let r = this.getDatasetMeta(s);
            const a = o.type || this.config.type;
            if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || Mi(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller) r.controller.updateIndex(s), r.controller.linkScales();
            else {
                const l = ot.getController(a), { datasetElementType: c, dataElementType: h } = O.datasets[a];
                Object.assign(l.prototype, {
                    dataElementType: ot.getElement(h),
                    datasetElementType: c && ot.getElement(c)
                }), r.controller = new l(this, s), t.push(r.controller);
            }
        }
        return this._updateMetasets(), t;
    }
    _resetElements() {
        E(this.data.datasets, (t, e)=>{
            this.getDatasetMeta(e).controller.reset();
        }, this);
    }
    reset() {
        this._resetElements(), this.notifyPlugins("reset");
    }
    update(t) {
        const e = this.config;
        e.update();
        const s = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), n = this._animationsDisabled = !s.animation;
        if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
            mode: t,
            cancelable: !0
        }) === !1) return;
        const o = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let r = 0;
        for(let c = 0, h = this.data.datasets.length; c < h; c++){
            const { controller: d } = this.getDatasetMeta(c), u = !n && o.indexOf(d) === -1;
            d.buildOrUpdateElements(u), r = Math.max(+d.getMaxOverflow(), r);
        }
        r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), n || E(o, (c)=>{
            c.reset();
        }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
            mode: t
        }), this._layers.sort(Is("z", "_idx"));
        const { _active: a, _lastEvent: l } = this;
        l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
    }
    _updateScales() {
        E(this.scales, (t)=>{
            X.removeBox(this, t);
        }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
    }
    _checkEventBindings() {
        const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
        (!Ui(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
        const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
        for (const { method: s, start: n, count: o } of e){
            const r = s === "_removeElements" ? -o : o;
            Pl(t, n, r);
        }
    }
    _getUniformDataChanges() {
        const t = this._dataChanges;
        if (!t || !t.length) return;
        this._dataChanges = [];
        const e = this.data.datasets.length, s = (o)=>new Set(t.filter((r)=>r[0] === o).map((r, a)=>a + "," + r.splice(1).join(","))), n = s(0);
        for(let o = 1; o < e; o++)if (!Ui(n, s(o))) return;
        return Array.from(n).map((o)=>o.split(",")).map((o)=>({
                method: o[1],
                start: +o[2],
                count: +o[3]
            }));
    }
    _updateLayout(t) {
        if (this.notifyPlugins("beforeLayout", {
            cancelable: !0
        }) === !1) return;
        X.update(this, this.width, this.height, t);
        const e = this.chartArea, s = e.width <= 0 || e.height <= 0;
        this._layers = [], E(this.boxes, (n)=>{
            s && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()));
        }, this), this._layers.forEach((n, o)=>{
            n._idx = o;
        }), this.notifyPlugins("afterLayout");
    }
    _updateDatasets(t) {
        if (this.notifyPlugins("beforeDatasetsUpdate", {
            mode: t,
            cancelable: !0
        }) !== !1) {
            for(let e = 0, s = this.data.datasets.length; e < s; ++e)this.getDatasetMeta(e).controller.configure();
            for(let e = 0, s = this.data.datasets.length; e < s; ++e)this._updateDataset(e, yt(t) ? t({
                datasetIndex: e
            }) : t);
            this.notifyPlugins("afterDatasetsUpdate", {
                mode: t
            });
        }
    }
    _updateDataset(t, e) {
        const s = this.getDatasetMeta(t), n = {
            meta: s,
            index: t,
            mode: e,
            cancelable: !0
        };
        this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (s.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n));
    }
    render() {
        this.notifyPlugins("beforeRender", {
            cancelable: !0
        }) !== !1 && (at.has(this) ? this.attached && !at.running(this) && at.start(this) : (this.draw(), zs({
            chart: this
        })));
    }
    draw() {
        let t;
        if (this._resizeBeforeDraw) {
            const { width: s, height: n } = this._resizeBeforeDraw;
            this._resize(s, n), this._resizeBeforeDraw = null;
        }
        if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
            cancelable: !0
        }) === !1) return;
        const e = this._layers;
        for(t = 0; t < e.length && e[t].z <= 0; ++t)e[t].draw(this.chartArea);
        for(this._drawDatasets(); t < e.length; ++t)e[t].draw(this.chartArea);
        this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(t) {
        const e = this._sortedMetasets, s = [];
        let n, o;
        for(n = 0, o = e.length; n < o; ++n){
            const r = e[n];
            (!t || r.visible) && s.push(r);
        }
        return s;
    }
    getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
        if (this.notifyPlugins("beforeDatasetsDraw", {
            cancelable: !0
        }) === !1) return;
        const t = this.getSortedVisibleDatasetMetas();
        for(let e = t.length - 1; e >= 0; --e)this._drawDataset(t[e]);
        this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(t) {
        const e = this.ctx, s = t._clip, n = !s.disabled, o = this.chartArea, r = {
            meta: t,
            index: t.index,
            cancelable: !0
        };
        this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (n && Xe(e, {
            left: s.left === !1 ? 0 : o.left - s.left,
            right: s.right === !1 ? this.width : o.right + s.right,
            top: s.top === !1 ? 0 : o.top - s.top,
            bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom
        }), t.controller.draw(), n && Ue(e), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
    }
    isPointInArea(t) {
        return re(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, e, s, n) {
        const o = Hn.modes[e];
        return typeof o == "function" ? o(this, t, s, n) : [];
    }
    getDatasetMeta(t) {
        const e = this.data.datasets[t], s = this._metasets;
        let n = s.filter((o)=>o && o._dataset === e).pop();
        return n || (n = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: e && e.order || 0,
            index: t,
            _dataset: e,
            _parsed: [],
            _sorted: !1
        }, s.push(n)), n;
    }
    getContext() {
        return this.$context || (this.$context = vt(null, {
            chart: this,
            type: "chart"
        }));
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
        const e = this.data.datasets[t];
        if (!e) return !1;
        const s = this.getDatasetMeta(t);
        return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden;
    }
    setDatasetVisibility(t, e) {
        const s = this.getDatasetMeta(t);
        s.hidden = !e;
    }
    toggleDataVisibility(t) {
        this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
        return !this._hiddenIndices[t];
    }
    _updateVisibility(t, e, s) {
        const n = s ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, n);
        et(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
            visible: s
        }), this.update((a)=>a.datasetIndex === t ? n : void 0));
    }
    hide(t, e) {
        this._updateVisibility(t, e, !1);
    }
    show(t, e) {
        this._updateVisibility(t, e, !0);
    }
    _destroyDatasetMeta(t) {
        const e = this._metasets[t];
        e && e.controller && e.controller._destroy(), delete this._metasets[t];
    }
    _stop() {
        let t, e;
        for(this.stop(), at.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)this._destroyDatasetMeta(t);
    }
    destroy() {
        this.notifyPlugins("beforeDestroy");
        const { canvas: t, ctx: e } = this;
        this._stop(), this.config.clearCache(), t && (this.unbindEvents(), os(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), this.notifyPlugins("destroy"), delete $e[this.id], this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...t) {
        return this.canvas.toDataURL(...t);
    }
    bindEvents() {
        this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
    }
    bindUserEvents() {
        const t = this._listeners, e = this.platform, s = (o, r)=>{
            e.addEventListener(this, o, r), t[o] = r;
        }, n = (o, r, a)=>{
            o.offsetX = r, o.offsetY = a, this._eventHandler(o);
        };
        E(this.options.events, (o)=>s(o, n));
    }
    bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const t = this._responsiveListeners, e = this.platform, s = (l, c)=>{
            e.addEventListener(this, l, c), t[l] = c;
        }, n = (l, c)=>{
            t[l] && (e.removeEventListener(this, l, c), delete t[l]);
        }, o = (l, c)=>{
            this.canvas && this.resize(l, c);
        };
        let r;
        const a = ()=>{
            n("attach", a), this.attached = !0, this.resize(), s("resize", o), s("detach", r);
        };
        r = ()=>{
            this.attached = !1, n("resize", o), this._stop(), this._resize(0, 0), s("attach", a);
        }, e.isAttached(this.canvas) ? a() : r();
    }
    unbindEvents() {
        E(this._listeners, (t, e)=>{
            this.platform.removeEventListener(this, e, t);
        }), this._listeners = {}, E(this._responsiveListeners, (t, e)=>{
            this.platform.removeEventListener(this, e, t);
        }), this._responsiveListeners = void 0;
    }
    updateHoverStyle(t, e, s) {
        const n = s ? "set" : "remove";
        let o, r, a, l;
        for(e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a){
            r = t[a];
            const c = r && this.getDatasetMeta(r.datasetIndex).controller;
            c && c[n + "HoverStyle"](r.element, r.datasetIndex, r.index);
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(t) {
        const e = this._active || [], s = t.map(({ datasetIndex: o, index: r })=>{
            const a = this.getDatasetMeta(o);
            if (!a) throw new Error("No dataset found at index " + o);
            return {
                datasetIndex: o,
                element: a.data[r],
                index: r
            };
        });
        !ze(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
    }
    notifyPlugins(t, e, s) {
        return this._plugins.notify(this, t, e, s);
    }
    _updateHoverStyles(t, e, s) {
        const n = this.options.hover, o = (l, c)=>l.filter((h)=>!c.some((d)=>h.datasetIndex === d.datasetIndex && h.index === d.index)), r = o(e, t), a = s ? t : o(t, e);
        r.length && this.updateHoverStyle(r, n.mode, !1), a.length && n.mode && this.updateHoverStyle(a, n.mode, !0);
    }
    _eventHandler(t, e) {
        const s = {
            event: t,
            replay: e,
            cancelable: !0,
            inChartArea: this.isPointInArea(t)
        }, n = (r)=>(r.options.events || this.options.events).includes(t.native.type);
        if (this.notifyPlugins("beforeEvent", s, n) === !1) return;
        const o = this._handleEvent(t, e, s.inChartArea);
        return s.cancelable = !1, this.notifyPlugins("afterEvent", s, n), (o || s.changed) && this.render(), this;
    }
    _handleEvent(t, e, s) {
        const { _active: n = [], options: o } = this, r = e, a = this._getActiveElements(t, n, s, r), l = So(t), c = Cl(t, this._lastEvent, s, l);
        s && (this._lastEvent = null, I(o.onHover, [
            t,
            a,
            this
        ], this), l && I(o.onClick, [
            t,
            a,
            this
        ], this));
        const h = !ze(a, n);
        return (h || e) && (this._active = a, this._updateHoverStyles(a, n, e)), this._lastEvent = c, h;
    }
    _getActiveElements(t, e, s, n) {
        if (t.type === "mouseout") return [];
        if (!s) return e;
        const o = this.options.hover;
        return this.getElementsAtEventForMode(t, o.mode, o, n);
    }
}
const Bs = ()=>E(ji.instances, (i)=>i._plugins.invalidate()), pt = !0;
Object.defineProperties(ji, {
    defaults: {
        enumerable: pt,
        value: O
    },
    instances: {
        enumerable: pt,
        value: $e
    },
    overrides: {
        enumerable: pt,
        value: At
    },
    registry: {
        enumerable: pt,
        value: ot
    },
    version: {
        enumerable: pt,
        value: kl
    },
    getChart: {
        enumerable: pt,
        value: to
    },
    register: {
        enumerable: pt,
        value: (...i)=>{
            ot.add(...i), Bs();
        }
    },
    unregister: {
        enumerable: pt,
        value: (...i)=>{
            ot.remove(...i), Bs();
        }
    }
});
function eo(i, t, e) {
    const { startAngle: s, pixelMargin: n, x: o, y: r, outerRadius: a, innerRadius: l } = t;
    let c = n / a;
    i.beginPath(), i.arc(o, r, a, s - c, e + c), l > n ? (c = n / l, i.arc(o, r, l, e + c, s - c, !0)) : i.arc(o, r, n, e + V, s - V), i.closePath(), i.clip();
}
function Dl(i) {
    return Ii(i, [
        "outerStart",
        "outerEnd",
        "innerStart",
        "innerEnd"
    ]);
}
function Ol(i, t, e, s) {
    const n = Dl(i.options.borderRadius), o = (e - t) / 2, r = Math.min(o, s * t / 2), a = (l)=>{
        const c = (e - Math.min(o, l)) * s / 2;
        return Y(l, 0, Math.min(o, c));
    };
    return {
        outerStart: a(n.outerStart),
        outerEnd: a(n.outerEnd),
        innerStart: Y(n.innerStart, 0, r),
        innerEnd: Y(n.innerEnd, 0, r)
    };
}
function It(i, t, e, s) {
    return {
        x: e + i * Math.cos(t),
        y: s + i * Math.sin(t)
    };
}
function wi(i, t, e, s, n, o) {
    const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t, d = Math.max(t.outerRadius + s + e - c, 0), u = h > 0 ? h + s + e + c : 0;
    let f = 0;
    const g = n - l;
    if (s) {
        const P = h > 0 ? h - s : 0, j = d > 0 ? d - s : 0, W = (P + j) / 2, kt = W !== 0 ? g * W / (W + s) : g;
        f = (g - kt) / 2;
    }
    const p = Math.max(1e-3, g * d - e / B) / d, m = (g - p) / 2, b = l + m + f, x = n - m - f, { outerStart: v, outerEnd: y, innerStart: _, innerEnd: M } = Ol(t, u, d, x - b), k = d - v, S = d - y, w = b + v / k, L = x - y / S, R = u + _, A = u + M, H = b + _ / R, q = x - M / A;
    if (i.beginPath(), o) {
        if (i.arc(r, a, d, w, L), y > 0) {
            const W = It(S, L, r, a);
            i.arc(W.x, W.y, y, L, x + V);
        }
        const P = It(A, x, r, a);
        if (i.lineTo(P.x, P.y), M > 0) {
            const W = It(A, q, r, a);
            i.arc(W.x, W.y, M, x + V, q + Math.PI);
        }
        if (i.arc(r, a, u, x - M / u, b + _ / u, !0), _ > 0) {
            const W = It(R, H, r, a);
            i.arc(W.x, W.y, _, H + Math.PI, b - V);
        }
        const j = It(k, b, r, a);
        if (i.lineTo(j.x, j.y), v > 0) {
            const W = It(k, w, r, a);
            i.arc(W.x, W.y, v, b - V, w);
        }
    } else {
        i.moveTo(r, a);
        const P = Math.cos(w) * d + r, j = Math.sin(w) * d + a;
        i.lineTo(P, j);
        const W = Math.cos(L) * d + r, kt = Math.sin(L) * d + a;
        i.lineTo(W, kt);
    }
    i.closePath();
}
function Al(i, t, e, s, n) {
    const { fullCircles: o, startAngle: r, circumference: a } = t;
    let l = t.endAngle;
    if (o) {
        wi(i, t, e, s, r + F, n);
        for(let c = 0; c < o; ++c)i.fill();
        isNaN(a) || (l = r + a % F, a % F === 0 && (l += F));
    }
    return wi(i, t, e, s, l, n), i.fill(), l;
}
function Tl(i, t, e) {
    const { x: s, y: n, startAngle: o, pixelMargin: r, fullCircles: a } = t, l = Math.max(t.outerRadius - r, 0), c = t.innerRadius + r;
    let h;
    for(e && eo(i, t, o + F), i.beginPath(), i.arc(s, n, c, o + F, o, !0), h = 0; h < a; ++h)i.stroke();
    for(i.beginPath(), i.arc(s, n, l, o, o + F), h = 0; h < a; ++h)i.stroke();
}
function Ll(i, t, e, s, n, o) {
    const { options: r } = t, { borderWidth: a, borderJoinStyle: l } = r, c = r.borderAlign === "inner";
    a && (c ? (i.lineWidth = a * 2, i.lineJoin = l || "round") : (i.lineWidth = a, i.lineJoin = l || "bevel"), t.fullCircles && Tl(i, t, c), c && eo(i, t, n), wi(i, t, e, s, n, o), i.stroke());
}
class ye extends st {
    constructor(t){
        super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
    }
    inRange(t, e, s) {
        const n = this.getProps([
            "x",
            "y"
        ], s), { angle: o, distance: r } = hn(n, {
            x: t,
            y: e
        }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: h, circumference: d } = this.getProps([
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "circumference"
        ], s), u = this.options.spacing / 2, g = C(d, l - a) >= F || oe(o, a, l), p = ut(r, c + u, h + u);
        return g && p;
    }
    getCenterPoint(t) {
        const { x: e, y: s, startAngle: n, endAngle: o, innerRadius: r, outerRadius: a } = this.getProps([
            "x",
            "y",
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "circumference"
        ], t), { offset: l, spacing: c } = this.options, h = (n + o) / 2, d = (r + a + c + l) / 2;
        return {
            x: e + Math.cos(h) * d,
            y: s + Math.sin(h) * d
        };
    }
    tooltipPosition(t) {
        return this.getCenterPoint(t);
    }
    draw(t) {
        const { options: e, circumference: s } = this, n = (e.offset || 0) / 2, o = (e.spacing || 0) / 2, r = e.circular;
        if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = s > F ? Math.floor(s / F) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0) return;
        t.save();
        let a = 0;
        if (n) {
            a = n / 2;
            const c = (this.startAngle + this.endAngle) / 2;
            t.translate(Math.cos(c) * a, Math.sin(c) * a), this.circumference >= B && (a = n);
        }
        t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor;
        const l = Al(t, this, a, o, r);
        Ll(t, this, a, o, l, r), t.restore();
    }
}
ye.id = "arc";
ye.defaults = {
    borderAlign: "center",
    borderColor: "#fff",
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0
};
ye.defaultRoutes = {
    backgroundColor: "backgroundColor"
};
function io(i, t, e = t) {
    i.lineCap = C(e.borderCapStyle, t.borderCapStyle), i.setLineDash(C(e.borderDash, t.borderDash)), i.lineDashOffset = C(e.borderDashOffset, t.borderDashOffset), i.lineJoin = C(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = C(e.borderWidth, t.borderWidth), i.strokeStyle = C(e.borderColor, t.borderColor);
}
function Rl(i, t, e) {
    i.lineTo(e.x, e.y);
}
function El(i) {
    return i.stepped ? lr : i.tension || i.cubicInterpolationMode === "monotone" ? cr : Rl;
}
function so(i, t, e = {}) {
    const s = i.length, { start: n = 0, end: o = s - 1 } = e, { start: r, end: a } = t, l = Math.max(n, r), c = Math.min(o, a), h = n < r && o < r || n > a && o > a;
    return {
        count: s,
        start: l,
        loop: t.loop,
        ilen: c < l && !h ? s + c - l : c - l
    };
}
function Fl(i, t, e, s) {
    const { points: n, options: o } = t, { count: r, start: a, loop: l, ilen: c } = so(n, e, s), h = El(o);
    let { move: d = !0, reverse: u } = s || {}, f, g, p;
    for(f = 0; f <= c; ++f)g = n[(a + (u ? c - f : f)) % r], !g.skip && (d ? (i.moveTo(g.x, g.y), d = !1) : h(i, p, g, u, o.stepped), p = g);
    return l && (g = n[(a + (u ? c : 0)) % r], h(i, p, g, u, o.stepped)), !!l;
}
function Il(i, t, e, s) {
    const n = t.points, { count: o, start: r, ilen: a } = so(n, e, s), { move: l = !0, reverse: c } = s || {};
    let h = 0, d = 0, u, f, g, p, m, b;
    const x = (y)=>(r + (c ? a - y : y)) % o, v = ()=>{
        p !== m && (i.lineTo(h, m), i.lineTo(h, p), i.lineTo(h, b));
    };
    for(l && (f = n[x(0)], i.moveTo(f.x, f.y)), u = 0; u <= a; ++u){
        if (f = n[x(u)], f.skip) continue;
        const y = f.x, _ = f.y, M = y | 0;
        M === g ? (_ < p ? p = _ : _ > m && (m = _), h = (d * h + y) / ++d) : (v(), i.lineTo(y, _), g = M, d = 0, p = m = _), b = _;
    }
    v();
}
function Si(i) {
    const t = i.options, e = t.borderDash && t.borderDash.length;
    return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Il : Fl;
}
function zl(i) {
    return i.stepped ? Wr : i.tension || i.cubicInterpolationMode === "monotone" ? Nr : Ct;
}
function Bl(i, t, e, s) {
    let n = t._path;
    n || (n = t._path = new Path2D(), t.path(n, e, s) && n.closePath()), io(i, t.options), i.stroke(n);
}
function Vl(i, t, e, s) {
    const { segments: n, options: o } = t, r = Si(t);
    for (const a of n)io(i, o, a.style), i.beginPath(), r(i, t, a, {
        start: e,
        end: e + s - 1
    }) && i.closePath(), i.stroke();
}
const Wl = typeof Path2D == "function";
function Nl(i, t, e, s) {
    Wl && !t.options.segment ? Bl(i, t, e, s) : Vl(i, t, e, s);
}
class gt extends st {
    constructor(t){
        super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
    }
    updateControlPoints(t, e) {
        const s = this.options;
        if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
            const n = s.spanGaps ? this._loop : this._fullLoop;
            Lr(this._points, s, t, n, e), this._pointsUpdated = !0;
        }
    }
    set points(t) {
        this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
    }
    get points() {
        return this._points;
    }
    get segments() {
        return this._segments || (this._segments = Kr(this, this.options.segment));
    }
    first() {
        const t = this.segments, e = this.points;
        return t.length && e[t[0].start];
    }
    last() {
        const t = this.segments, e = this.points, s = t.length;
        return s && e[t[s - 1].end];
    }
    interpolate(t, e) {
        const s = this.options, n = t[e], o = this.points, r = Fn(this, {
            property: e,
            start: n,
            end: n
        });
        if (!r.length) return;
        const a = [], l = zl(s);
        let c, h;
        for(c = 0, h = r.length; c < h; ++c){
            const { start: d, end: u } = r[c], f = o[d], g = o[u];
            if (f === g) {
                a.push(f);
                continue;
            }
            const p = Math.abs((n - f[e]) / (g[e] - f[e])), m = l(f, g, p, s.stepped);
            m[e] = t[e], a.push(m);
        }
        return a.length === 1 ? a[0] : a;
    }
    pathSegment(t, e, s) {
        return Si(this)(t, this, e, s);
    }
    path(t, e, s) {
        const n = this.segments, o = Si(this);
        let r = this._loop;
        e = e || 0, s = s || this.points.length - e;
        for (const a of n)r &= o(t, this, a, {
            start: e,
            end: e + s - 1
        });
        return !!r;
    }
    draw(t, e, s, n) {
        const o = this.options || {};
        (this.points || []).length && o.borderWidth && (t.save(), Nl(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
    }
}
gt.id = "line";
gt.defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0
};
gt.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
};
gt.descriptors = {
    _scriptable: !0,
    _indexable: (i)=>i !== "borderDash" && i !== "fill"
};
function Vs(i, t, e, s) {
    const n = i.options, { [e]: o } = i.getProps([
        e
    ], s);
    return Math.abs(t - o) < n.radius + n.hitRadius;
}
class ve extends st {
    constructor(t){
        super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
    }
    inRange(t, e, s) {
        const n = this.options, { x: o, y: r } = this.getProps([
            "x",
            "y"
        ], s);
        return Math.pow(t - o, 2) + Math.pow(e - r, 2) < Math.pow(n.hitRadius + n.radius, 2);
    }
    inXRange(t, e) {
        return Vs(this, t, "x", e);
    }
    inYRange(t, e) {
        return Vs(this, t, "y", e);
    }
    getCenterPoint(t) {
        const { x: e, y: s } = this.getProps([
            "x",
            "y"
        ], t);
        return {
            x: e,
            y: s
        };
    }
    size(t) {
        t = t || this.options || {};
        let e = t.radius || 0;
        e = Math.max(e, e && t.hoverRadius || 0);
        const s = e && t.borderWidth || 0;
        return (e + s) * 2;
    }
    draw(t, e) {
        const s = this.options;
        this.skip || s.radius < 0.1 || !re(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, yi(t, s, this.x, this.y));
    }
    getRange() {
        const t = this.options || {};
        return t.radius + t.hitRadius;
    }
}
ve.id = "point";
ve.defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0
};
ve.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
};
function no(i, t) {
    const { x: e, y: s, base: n, width: o, height: r } = i.getProps([
        "x",
        "y",
        "base",
        "width",
        "height"
    ], t);
    let a, l, c, h, d;
    return i.horizontal ? (d = r / 2, a = Math.min(e, n), l = Math.max(e, n), c = s - d, h = s + d) : (d = o / 2, a = e - d, l = e + d, c = Math.min(s, n), h = Math.max(s, n)), {
        left: a,
        top: c,
        right: l,
        bottom: h
    };
}
function bt(i, t, e, s) {
    return i ? 0 : Y(t, e, s);
}
function Hl(i, t, e) {
    const s = i.options.borderWidth, n = i.borderSkipped, o = kn(s);
    return {
        t: bt(n.top, o.top, 0, e),
        r: bt(n.right, o.right, 0, t),
        b: bt(n.bottom, o.bottom, 0, e),
        l: bt(n.left, o.left, 0, t)
    };
}
function jl(i, t, e) {
    const { enableBorderRadius: s } = i.getProps([
        "enableBorderRadius"
    ]), n = i.options.borderRadius, o = Dt(n), r = Math.min(t, e), a = i.borderSkipped, l = s || D(n);
    return {
        topLeft: bt(!l || a.top || a.left, o.topLeft, 0, r),
        topRight: bt(!l || a.top || a.right, o.topRight, 0, r),
        bottomLeft: bt(!l || a.bottom || a.left, o.bottomLeft, 0, r),
        bottomRight: bt(!l || a.bottom || a.right, o.bottomRight, 0, r)
    };
}
function $l(i) {
    const t = no(i), e = t.right - t.left, s = t.bottom - t.top, n = Hl(i, e / 2, s / 2), o = jl(i, e / 2, s / 2);
    return {
        outer: {
            x: t.left,
            y: t.top,
            w: e,
            h: s,
            radius: o
        },
        inner: {
            x: t.left + n.l,
            y: t.top + n.t,
            w: e - n.l - n.r,
            h: s - n.t - n.b,
            radius: {
                topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
                topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
                bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
                bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r))
            }
        }
    };
}
function gi(i, t, e, s) {
    const n = t === null, o = e === null, a = i && !(n && o) && no(i, s);
    return a && (n || ut(t, a.left, a.right)) && (o || ut(e, a.top, a.bottom));
}
function Yl(i) {
    return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function Xl(i, t) {
    i.rect(t.x, t.y, t.w, t.h);
}
function pi(i, t, e = {}) {
    const s = i.x !== e.x ? -t : 0, n = i.y !== e.y ? -t : 0, o = (i.x + i.w !== e.x + e.w ? t : 0) - s, r = (i.y + i.h !== e.y + e.h ? t : 0) - n;
    return {
        x: i.x + s,
        y: i.y + n,
        w: i.w + o,
        h: i.h + r,
        radius: i.radius
    };
}
class Me extends st {
    constructor(t){
        super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
    }
    draw(t) {
        const { inflateAmount: e, options: { borderColor: s, backgroundColor: n } } = this, { inner: o, outer: r } = $l(this), a = Yl(r.radius) ? ae : Xl;
        t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, pi(r, e, o)), t.clip(), a(t, pi(o, -e, r)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), a(t, pi(o, e)), t.fillStyle = n, t.fill(), t.restore();
    }
    inRange(t, e, s) {
        return gi(this, t, e, s);
    }
    inXRange(t, e) {
        return gi(this, t, null, e);
    }
    inYRange(t, e) {
        return gi(this, null, t, e);
    }
    getCenterPoint(t) {
        const { x: e, y: s, base: n, horizontal: o } = this.getProps([
            "x",
            "y",
            "base",
            "horizontal"
        ], t);
        return {
            x: o ? (e + n) / 2 : e,
            y: o ? s : (s + n) / 2
        };
    }
    getRange(t) {
        return t === "x" ? this.width / 2 : this.height / 2;
    }
}
Me.id = "bar";
Me.defaults = {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0
};
Me.defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
};
var oo = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    ArcElement: ye,
    LineElement: gt,
    PointElement: ve,
    BarElement: Me
});
function Ul(i, t, e, s, n) {
    const o = n.samples || s;
    if (o >= e) return i.slice(t, t + e);
    const r = [], a = (e - 2) / (o - 2);
    let l = 0;
    const c = t + e - 1;
    let h = t, d, u, f, g, p;
    for(r[l++] = i[h], d = 0; d < o - 2; d++){
        let m = 0, b = 0, x;
        const v = Math.floor((d + 1) * a) + 1 + t, y = Math.min(Math.floor((d + 2) * a) + 1, e) + t, _ = y - v;
        for(x = v; x < y; x++)m += i[x].x, b += i[x].y;
        m /= _, b /= _;
        const M = Math.floor(d * a) + 1 + t, k = Math.min(Math.floor((d + 1) * a) + 1, e) + t, { x: S, y: w } = i[h];
        for(f = g = -1, x = M; x < k; x++)g = 0.5 * Math.abs((S - m) * (i[x].y - w) - (S - i[x].x) * (b - w)), g > f && (f = g, u = i[x], p = x);
        r[l++] = u, h = p;
    }
    return r[l++] = i[c], r;
}
function Kl(i, t, e, s) {
    let n = 0, o = 0, r, a, l, c, h, d, u, f, g, p;
    const m = [], b = t + e - 1, x = i[t].x, y = i[b].x - x;
    for(r = t; r < t + e; ++r){
        a = i[r], l = (a.x - x) / y * s, c = a.y;
        const _ = l | 0;
        if (_ === h) c < g ? (g = c, d = r) : c > p && (p = c, u = r), n = (o * n + a.x) / ++o;
        else {
            const M = r - 1;
            if (!T(d) && !T(u)) {
                const k = Math.min(d, u), S = Math.max(d, u);
                k !== f && k !== M && m.push({
                    ...i[k],
                    x: n
                }), S !== f && S !== M && m.push({
                    ...i[S],
                    x: n
                });
            }
            r > 0 && M !== f && m.push(i[M]), m.push(a), h = _, o = 0, g = p = c, d = u = f = r;
        }
    }
    return m;
}
function ro(i) {
    if (i._decimated) {
        const t = i._data;
        delete i._decimated, delete i._data, Object.defineProperty(i, "data", {
            value: t
        });
    }
}
function Ws(i) {
    i.data.datasets.forEach((t)=>{
        ro(t);
    });
}
function ql(i, t) {
    const e = t.length;
    let s = 0, n;
    const { iScale: o } = i, { min: r, max: a, minDefined: l, maxDefined: c } = o.getUserBounds();
    return l && (s = Y(ft(t, o.axis, r).lo, 0, e - 1)), c ? n = Y(ft(t, o.axis, a).hi + 1, s, e) - s : n = e - s, {
        start: s,
        count: n
    };
}
var ao = {
    id: "decimation",
    defaults: {
        algorithm: "min-max",
        enabled: !1
    },
    beforeElementsUpdate: (i, t, e)=>{
        if (!e.enabled) {
            Ws(i);
            return;
        }
        const s = i.width;
        i.data.datasets.forEach((n, o)=>{
            const { _data: r, indexAxis: a } = n, l = i.getDatasetMeta(o), c = r || n.data;
            if (Zt([
                a,
                i.options.indexAxis
            ]) === "y" || !l.controller.supportsDecimation) return;
            const h = i.scales[l.xAxisID];
            if (h.type !== "linear" && h.type !== "time" || i.options.parsing) return;
            let { start: d, count: u } = ql(l, c);
            const f = e.threshold || 4 * s;
            if (u <= f) {
                ro(n);
                return;
            }
            T(r) && (n._data = c, delete n.data, Object.defineProperty(n, "data", {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this._decimated;
                },
                set: function(p) {
                    this._data = p;
                }
            }));
            let g;
            switch(e.algorithm){
                case "lttb":
                    g = Ul(c, d, u, s, e);
                    break;
                case "min-max":
                    g = Kl(c, d, u, s);
                    break;
                default:
                    throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
            }
            n._decimated = g;
        });
    },
    destroy (i) {
        Ws(i);
    }
};
function Gl(i, t, e) {
    const s = i.segments, n = i.points, o = t.points, r = [];
    for (const a of s){
        let { start: l, end: c } = a;
        c = $i(l, c, n);
        const h = Pi(e, n[l], n[c], a.loop);
        if (!t.segments) {
            r.push({
                source: a,
                target: h,
                start: n[l],
                end: n[c]
            });
            continue;
        }
        const d = Fn(t, h);
        for (const u of d){
            const f = Pi(e, o[u.start], o[u.end], u.loop), g = En(a, n, f);
            for (const p of g)r.push({
                source: p,
                target: u,
                start: {
                    [e]: Ns(h, f, "start", Math.max)
                },
                end: {
                    [e]: Ns(h, f, "end", Math.min)
                }
            });
        }
    }
    return r;
}
function Pi(i, t, e, s) {
    if (s) return;
    let n = t[i], o = e[i];
    return i === "angle" && (n = Z(n), o = Z(o)), {
        property: i,
        start: n,
        end: o
    };
}
function Zl(i, t) {
    const { x: e = null, y: s = null } = i || {}, n = t.points, o = [];
    return t.segments.forEach(({ start: r, end: a })=>{
        a = $i(r, a, n);
        const l = n[r], c = n[a];
        s !== null ? (o.push({
            x: l.x,
            y: s
        }), o.push({
            x: c.x,
            y: s
        })) : e !== null && (o.push({
            x: e,
            y: l.y
        }), o.push({
            x: e,
            y: c.y
        }));
    }), o;
}
function $i(i, t, e) {
    for(; t > i; t--){
        const s = e[t];
        if (!isNaN(s.x) && !isNaN(s.y)) break;
    }
    return t;
}
function Ns(i, t, e, s) {
    return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function lo(i, t) {
    let e = [], s = !1;
    return z(i) ? (s = !0, e = i) : e = Zl(i, t), e.length ? new gt({
        points: e,
        options: {
            tension: 0
        },
        _loop: s,
        _fullLoop: s
    }) : null;
}
function Hs(i) {
    return i && i.fill !== !1;
}
function Jl(i, t, e) {
    let n = i[t].fill;
    const o = [
        t
    ];
    let r;
    if (!e) return n;
    for(; n !== !1 && o.indexOf(n) === -1;){
        if (!N(n)) return n;
        if (r = i[n], !r) return !1;
        if (r.visible) return n;
        o.push(n), n = r.fill;
    }
    return !1;
}
function Ql(i, t, e) {
    const s = sc(i);
    if (D(s)) return isNaN(s.value) ? !1 : s;
    let n = parseFloat(s);
    return N(n) && Math.floor(n) === n ? tc(s[0], t, n, e) : [
        "origin",
        "start",
        "end",
        "stack",
        "shape"
    ].indexOf(s) >= 0 && s;
}
function tc(i, t, e, s) {
    return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e;
}
function ec(i, t) {
    let e = null;
    return i === "start" ? e = t.bottom : i === "end" ? e = t.top : D(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function ic(i, t, e) {
    let s;
    return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : D(i) ? s = i.value : s = t.getBaseValue(), s;
}
function sc(i) {
    const t = i.options, e = t.fill;
    let s = C(e && e.target, e);
    return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function nc(i) {
    const { scale: t, index: e, line: s } = i, n = [], o = s.segments, r = s.points, a = oc(t, e);
    a.push(lo({
        x: null,
        y: t.bottom
    }, s));
    for(let l = 0; l < o.length; l++){
        const c = o[l];
        for(let h = c.start; h <= c.end; h++)rc(n, r[h], a);
    }
    return new gt({
        points: n,
        options: {}
    });
}
function oc(i, t) {
    const e = [], s = i.getMatchingVisibleMetas("line");
    for(let n = 0; n < s.length; n++){
        const o = s[n];
        if (o.index === t) break;
        o.hidden || e.unshift(o.dataset);
    }
    return e;
}
function rc(i, t, e) {
    const s = [];
    for(let n = 0; n < e.length; n++){
        const o = e[n], { first: r, last: a, point: l } = ac(o, t, "x");
        if (!(!l || r && a)) {
            if (r) s.unshift(l);
            else if (i.push(l), !a) break;
        }
    }
    i.push(...s);
}
function ac(i, t, e) {
    const s = i.interpolate(t, e);
    if (!s) return {};
    const n = s[e], o = i.segments, r = i.points;
    let a = !1, l = !1;
    for(let c = 0; c < o.length; c++){
        const h = o[c], d = r[h.start][e], u = r[h.end][e];
        if (ut(n, d, u)) {
            a = n === d, l = n === u;
            break;
        }
    }
    return {
        first: a,
        last: l,
        point: s
    };
}
class co {
    constructor(t){
        this.x = t.x, this.y = t.y, this.radius = t.radius;
    }
    pathSegment(t, e, s) {
        const { x: n, y: o, radius: r } = this;
        return e = e || {
            start: 0,
            end: F
        }, t.arc(n, o, r, e.end, e.start, !0), !s.bounds;
    }
    interpolate(t) {
        const { x: e, y: s, radius: n } = this, o = t.angle;
        return {
            x: e + Math.cos(o) * n,
            y: s + Math.sin(o) * n,
            angle: o
        };
    }
}
function lc(i) {
    const { chart: t, fill: e, line: s } = i;
    if (N(e)) return cc(t, e);
    if (e === "stack") return nc(i);
    if (e === "shape") return !0;
    const n = hc(i);
    return n instanceof co ? n : lo(n, s);
}
function cc(i, t) {
    const e = i.getDatasetMeta(t);
    return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function hc(i) {
    return (i.scale || {}).getPointPositionForValue ? uc(i) : dc(i);
}
function dc(i) {
    const { scale: t = {}, fill: e } = i, s = ec(e, t);
    if (N(s)) {
        const n = t.isHorizontal();
        return {
            x: n ? s : null,
            y: n ? null : s
        };
    }
    return null;
}
function uc(i) {
    const { scale: t, fill: e } = i, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min, r = ic(e, t, o), a = [];
    if (s.grid.circular) {
        const l = t.getPointPositionForValue(0, o);
        return new co({
            x: l.x,
            y: l.y,
            radius: t.getDistanceFromCenterForValue(r)
        });
    }
    for(let l = 0; l < n; ++l)a.push(t.getPointPositionForValue(l, r));
    return a;
}
function mi(i, t, e) {
    const s = lc(t), { line: n, scale: o, axis: r } = t, a = n.options, l = a.fill, c = a.backgroundColor, { above: h = c, below: d = c } = l || {};
    s && n.points.length && (Xe(i, e), fc(i, {
        line: n,
        target: s,
        above: h,
        below: d,
        area: e,
        scale: o,
        axis: r
    }), Ue(i));
}
function fc(i, t) {
    const { line: e, target: s, above: n, below: o, area: r, scale: a } = t, l = e._loop ? "angle" : t.axis;
    i.save(), l === "x" && o !== n && (js(i, s, r.top), $s(i, {
        line: e,
        target: s,
        color: n,
        scale: a,
        property: l
    }), i.restore(), i.save(), js(i, s, r.bottom)), $s(i, {
        line: e,
        target: s,
        color: o,
        scale: a,
        property: l
    }), i.restore();
}
function js(i, t, e) {
    const { segments: s, points: n } = t;
    let o = !0, r = !1;
    i.beginPath();
    for (const a of s){
        const { start: l, end: c } = a, h = n[l], d = n[$i(l, c, n)];
        o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)), r = !!t.pathSegment(i, a, {
            move: r
        }), r ? i.closePath() : i.lineTo(d.x, e);
    }
    i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function $s(i, t) {
    const { line: e, target: s, property: n, color: o, scale: r } = t, a = Gl(e, s, n);
    for (const { source: l, target: c, start: h, end: d } of a){
        const { style: { backgroundColor: u = o } = {} } = l, f = s !== !0;
        i.save(), i.fillStyle = u, gc(i, r, f && Pi(n, h, d)), i.beginPath();
        const g = !!e.pathSegment(i, l);
        let p;
        if (f) {
            g ? i.closePath() : Ys(i, s, d, n);
            const m = !!s.pathSegment(i, c, {
                move: g,
                reverse: !0
            });
            p = g && m, p || Ys(i, s, h, n);
        }
        i.closePath(), i.fill(p ? "evenodd" : "nonzero"), i.restore();
    }
}
function gc(i, t, e) {
    const { top: s, bottom: n } = t.chart.chartArea, { property: o, start: r, end: a } = e || {};
    o === "x" && (i.beginPath(), i.rect(r, s, a - r, n - s), i.clip());
}
function Ys(i, t, e, s) {
    const n = t.interpolate(e, s);
    n && i.lineTo(n.x, n.y);
}
var ho = {
    id: "filler",
    afterDatasetsUpdate (i, t, e) {
        const s = (i.data.datasets || []).length, n = [];
        let o, r, a, l;
        for(r = 0; r < s; ++r)o = i.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof gt && (l = {
            visible: i.isDatasetVisible(r),
            index: r,
            fill: Ql(a, r, s),
            chart: i,
            axis: o.controller.options.indexAxis,
            scale: o.vScale,
            line: a
        }), o.$filler = l, n.push(l);
        for(r = 0; r < s; ++r)l = n[r], !(!l || l.fill === !1) && (l.fill = Jl(n, r, e.propagate));
    },
    beforeDraw (i, t, e) {
        const s = e.drawTime === "beforeDraw", n = i.getSortedVisibleDatasetMetas(), o = i.chartArea;
        for(let r = n.length - 1; r >= 0; --r){
            const a = n[r].$filler;
            a && (a.line.updateControlPoints(o, a.axis), s && a.fill && mi(i.ctx, a, o));
        }
    },
    beforeDatasetsDraw (i, t, e) {
        if (e.drawTime !== "beforeDatasetsDraw") return;
        const s = i.getSortedVisibleDatasetMetas();
        for(let n = s.length - 1; n >= 0; --n){
            const o = s[n].$filler;
            Hs(o) && mi(i.ctx, o, i.chartArea);
        }
    },
    beforeDatasetDraw (i, t, e) {
        const s = t.meta.$filler;
        !Hs(s) || e.drawTime !== "beforeDatasetDraw" || mi(i.ctx, s, i.chartArea);
    },
    defaults: {
        propagate: !0,
        drawTime: "beforeDatasetDraw"
    }
};
const Xs = (i, t)=>{
    let { boxHeight: e = t, boxWidth: s = t } = i;
    return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
        boxWidth: s,
        boxHeight: e,
        itemHeight: Math.max(t, e)
    };
}, pc = (i, t)=>i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class Us extends st {
    constructor(t){
        super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
    }
    update(t, e, s) {
        this.maxWidth = t, this.maxHeight = e, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit();
    }
    setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
    }
    buildLabels() {
        const t = this.options.labels || {};
        let e = I(t.generateLabels, [
            this.chart
        ], this) || [];
        t.filter && (e = e.filter((s)=>t.filter(s, this.chart.data))), t.sort && (e = e.sort((s, n)=>t.sort(s, n, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
    }
    fit() {
        const { options: t, ctx: e } = this;
        if (!t.display) {
            this.width = this.height = 0;
            return;
        }
        const s = t.labels, n = $(s.font), o = n.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = Xs(s, o);
        let c, h;
        e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(r, o, a, l) + 10) : (h = this.maxHeight, c = this._fitCols(r, o, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
    }
    _fitRows(t, e, s, n) {
        const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
            0
        ], h = n + a;
        let d = t;
        o.textAlign = "left", o.textBaseline = "middle";
        let u = -1, f = -h;
        return this.legendItems.forEach((g, p)=>{
            const m = s + e / 2 + o.measureText(g.text).width;
            (p === 0 || c[c.length - 1] + m + 2 * a > r) && (d += h, c[c.length - (p > 0 ? 0 : 1)] = 0, f += h, u++), l[p] = {
                left: 0,
                top: f,
                row: u,
                width: m,
                height: n
            }, c[c.length - 1] += m + a;
        }), d;
    }
    _fitCols(t, e, s, n) {
        const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = r - t;
        let d = a, u = 0, f = 0, g = 0, p = 0;
        return this.legendItems.forEach((m, b)=>{
            const x = s + e / 2 + o.measureText(m.text).width;
            b > 0 && f + n + 2 * a > h && (d += u + a, c.push({
                width: u,
                height: f
            }), g += u + a, p++, u = f = 0), l[b] = {
                left: g,
                top: f,
                col: p,
                width: x,
                height: n
            }, u = Math.max(u, x), f += n + a;
        }), d += u, c.push({
            width: u,
            height: f
        }), d;
    }
    adjustHitBoxes() {
        if (!this.options.display) return;
        const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, r = zt(o, this.left, this.width);
        if (this.isHorizontal()) {
            let a = 0, l = U(s, this.left + n, this.right - this.lineWidths[a]);
            for (const c of e)a !== c.row && (a = c.row, l = U(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + n;
        } else {
            let a = 0, l = U(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
            for (const c of e)c.col !== a && (a = c.col, l = U(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + n;
        }
    }
    isHorizontal() {
        return this.options.position === "top" || this.options.position === "bottom";
    }
    draw() {
        if (this.options.display) {
            const t = this.ctx;
            Xe(t, this), this._draw(), Ue(t);
        }
    }
    _draw() {
        const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: r } = t, a = O.color, l = zt(t.rtl, this.left, this.width), c = $(r.font), { color: h, padding: d } = r, u = c.size, f = u / 2;
        let g;
        this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
        const { boxWidth: p, boxHeight: m, itemHeight: b } = Xs(r, u), x = function(k, S, w) {
            if (isNaN(p) || p <= 0 || isNaN(m) || m < 0) return;
            n.save();
            const L = C(w.lineWidth, 1);
            if (n.fillStyle = C(w.fillStyle, a), n.lineCap = C(w.lineCap, "butt"), n.lineDashOffset = C(w.lineDashOffset, 0), n.lineJoin = C(w.lineJoin, "miter"), n.lineWidth = L, n.strokeStyle = C(w.strokeStyle, a), n.setLineDash(C(w.lineDash, [])), r.usePointStyle) {
                const R = {
                    radius: m * Math.SQRT2 / 2,
                    pointStyle: w.pointStyle,
                    rotation: w.rotation,
                    borderWidth: L
                }, A = l.xPlus(k, p / 2), H = S + f;
                Mn(n, R, A, H, r.pointStyleWidth && p);
            } else {
                const R = S + Math.max((u - m) / 2, 0), A = l.leftForLtr(k, p), H = Dt(w.borderRadius);
                n.beginPath(), Object.values(H).some((q)=>q !== 0) ? ae(n, {
                    x: A,
                    y: R,
                    w: p,
                    h: m,
                    radius: H
                }) : n.rect(A, R, p, m), n.fill(), L !== 0 && n.stroke();
            }
            n.restore();
        }, v = function(k, S, w) {
            Tt(n, w.text, k, S + b / 2, c, {
                strikethrough: w.hidden,
                textAlign: l.textAlign(w.textAlign)
            });
        }, y = this.isHorizontal(), _ = this._computeTitleHeight();
        y ? g = {
            x: U(o, this.left + d, this.right - s[0]),
            y: this.top + d + _,
            line: 0
        } : g = {
            x: this.left + d,
            y: U(o, this.top + _ + d, this.bottom - e[0].height),
            line: 0
        }, Tn(this.ctx, t.textDirection);
        const M = b + d;
        this.legendItems.forEach((k, S)=>{
            n.strokeStyle = k.fontColor || h, n.fillStyle = k.fontColor || h;
            const w = n.measureText(k.text).width, L = l.textAlign(k.textAlign || (k.textAlign = r.textAlign)), R = p + f + w;
            let A = g.x, H = g.y;
            l.setWidth(this.width), y ? S > 0 && A + R + d > this.right && (H = g.y += M, g.line++, A = g.x = U(o, this.left + d, this.right - s[g.line])) : S > 0 && H + M > this.bottom && (A = g.x = A + e[g.line].width + d, g.line++, H = g.y = U(o, this.top + _ + d, this.bottom - e[g.line].height));
            const q = l.x(A);
            x(q, H, k), A = Io(L, A + p + f, y ? A + R : this.right, t.rtl), v(l.x(A), H, k), y ? g.x += R + d : g.y += M;
        }), Ln(this.ctx, t.textDirection);
    }
    drawTitle() {
        const t = this.options, e = t.title, s = $(e.font), n = K(e.padding);
        if (!e.display) return;
        const o = zt(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = s.size / 2, c = n.top + l;
        let h, d = this.left, u = this.width;
        if (this.isHorizontal()) u = Math.max(...this.lineWidths), h = this.top + c, d = U(t.align, d, this.right - u);
        else {
            const g = this.columnSizes.reduce((p, m)=>Math.max(p, m.height), 0);
            h = c + U(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
        }
        const f = U(a, d, d + u);
        r.textAlign = o.textAlign(Li(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = s.string, Tt(r, e.text, f, h, s);
    }
    _computeTitleHeight() {
        const t = this.options.title, e = $(t.font), s = K(t.padding);
        return t.display ? e.lineHeight + s.height : 0;
    }
    _getLegendItemAt(t, e) {
        let s, n, o;
        if (ut(t, this.left, this.right) && ut(e, this.top, this.bottom)) {
            for(o = this.legendHitBoxes, s = 0; s < o.length; ++s)if (n = o[s], ut(t, n.left, n.left + n.width) && ut(e, n.top, n.top + n.height)) return this.legendItems[s];
        }
        return null;
    }
    handleEvent(t) {
        const e = this.options;
        if (!mc(t.type, e)) return;
        const s = this._getLegendItemAt(t.x, t.y);
        if (t.type === "mousemove" || t.type === "mouseout") {
            const n = this._hoveredItem, o = pc(n, s);
            n && !o && I(e.onLeave, [
                t,
                n,
                this
            ], this), this._hoveredItem = s, s && !o && I(e.onHover, [
                t,
                s,
                this
            ], this);
        } else s && I(e.onClick, [
            t,
            s,
            this
        ], this);
    }
}
function mc(i, t) {
    return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var uo = {
    id: "legend",
    _element: Us,
    start (i, t, e) {
        const s = i.legend = new Us({
            ctx: i.ctx,
            options: e,
            chart: i
        });
        X.configure(i, s, e), X.addBox(i, s);
    },
    stop (i) {
        X.removeBox(i, i.legend), delete i.legend;
    },
    beforeUpdate (i, t, e) {
        const s = i.legend;
        X.configure(i, s, e), s.options = e;
    },
    afterUpdate (i) {
        const t = i.legend;
        t.buildLabels(), t.adjustHitBoxes();
    },
    afterEvent (i, t) {
        t.replay || i.legend.handleEvent(t.event);
    },
    defaults: {
        display: !0,
        position: "top",
        align: "center",
        fullSize: !0,
        reverse: !1,
        weight: 1e3,
        onClick (i, t, e) {
            const s = t.datasetIndex, n = e.chart;
            n.isDatasetVisible(s) ? (n.hide(s), t.hidden = !0) : (n.show(s), t.hidden = !1);
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: (i)=>i.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels (i) {
                const t = i.data.datasets, { labels: { usePointStyle: e, pointStyle: s, textAlign: n, color: o } } = i.legend.options;
                return i._getSortedDatasetMetas().map((r)=>{
                    const a = r.controller.getStyle(e ? 0 : void 0), l = K(a.borderWidth);
                    return {
                        text: t[r.index].label,
                        fillStyle: a.backgroundColor,
                        fontColor: o,
                        hidden: !r.visible,
                        lineCap: a.borderCapStyle,
                        lineDash: a.borderDash,
                        lineDashOffset: a.borderDashOffset,
                        lineJoin: a.borderJoinStyle,
                        lineWidth: (l.width + l.height) / 4,
                        strokeStyle: a.borderColor,
                        pointStyle: s || a.pointStyle,
                        rotation: a.rotation,
                        textAlign: n || a.textAlign,
                        borderRadius: 0,
                        datasetIndex: r.index
                    };
                }, this);
            }
        },
        title: {
            color: (i)=>i.chart.options.color,
            display: !1,
            position: "center",
            text: ""
        }
    },
    descriptors: {
        _scriptable: (i)=>!i.startsWith("on"),
        labels: {
            _scriptable: (i)=>![
                    "generateLabels",
                    "filter",
                    "sort"
                ].includes(i)
        }
    }
};
class Yi extends st {
    constructor(t){
        super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
    }
    update(t, e) {
        const s = this.options;
        if (this.left = 0, this.top = 0, !s.display) {
            this.width = this.height = this.right = this.bottom = 0;
            return;
        }
        this.width = this.right = t, this.height = this.bottom = e;
        const n = z(s.text) ? s.text.length : 1;
        this._padding = K(s.padding);
        const o = n * $(s.font).lineHeight + this._padding.height;
        this.isHorizontal() ? this.height = o : this.width = o;
    }
    isHorizontal() {
        const t = this.options.position;
        return t === "top" || t === "bottom";
    }
    _drawArgs(t) {
        const { top: e, left: s, bottom: n, right: o, options: r } = this, a = r.align;
        let l = 0, c, h, d;
        return this.isHorizontal() ? (h = U(a, s, o), d = e + t, c = o - s) : (r.position === "left" ? (h = s + t, d = U(a, n, e), l = B * -0.5) : (h = o - t, d = U(a, e, n), l = B * 0.5), c = n - e), {
            titleX: h,
            titleY: d,
            maxWidth: c,
            rotation: l
        };
    }
    draw() {
        const t = this.ctx, e = this.options;
        if (!e.display) return;
        const s = $(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
        Tt(t, e.text, 0, 0, s, {
            color: e.color,
            maxWidth: l,
            rotation: c,
            textAlign: Li(e.align),
            textBaseline: "middle",
            translation: [
                r,
                a
            ]
        });
    }
}
function bc(i, t) {
    const e = new Yi({
        ctx: i.ctx,
        options: t,
        chart: i
    });
    X.configure(i, e, t), X.addBox(i, e), i.titleBlock = e;
}
var fo = {
    id: "title",
    _element: Yi,
    start (i, t, e) {
        bc(i, e);
    },
    stop (i) {
        const t = i.titleBlock;
        X.removeBox(i, t), delete i.titleBlock;
    },
    beforeUpdate (i, t, e) {
        const s = i.titleBlock;
        X.configure(i, s, e), s.options = e;
    },
    defaults: {
        align: "center",
        display: !1,
        font: {
            weight: "bold"
        },
        fullSize: !0,
        padding: 10,
        position: "top",
        text: "",
        weight: 2e3
    },
    defaultRoutes: {
        color: "color"
    },
    descriptors: {
        _scriptable: !0,
        _indexable: !1
    }
};
const Re = /* @__PURE__ */ new WeakMap();
var go = {
    id: "subtitle",
    start (i, t, e) {
        const s = new Yi({
            ctx: i.ctx,
            options: e,
            chart: i
        });
        X.configure(i, s, e), X.addBox(i, s), Re.set(i, s);
    },
    stop (i) {
        X.removeBox(i, Re.get(i)), Re.delete(i);
    },
    beforeUpdate (i, t, e) {
        const s = Re.get(i);
        X.configure(i, s, e), s.options = e;
    },
    defaults: {
        align: "center",
        display: !1,
        font: {
            weight: "normal"
        },
        fullSize: !0,
        padding: 0,
        position: "top",
        text: "",
        weight: 1500
    },
    defaultRoutes: {
        color: "color"
    },
    descriptors: {
        _scriptable: !0,
        _indexable: !1
    }
};
const se = {
    average (i) {
        if (!i.length) return !1;
        let t, e, s = 0, n = 0, o = 0;
        for(t = 0, e = i.length; t < e; ++t){
            const r = i[t].element;
            if (r && r.hasValue()) {
                const a = r.tooltipPosition();
                s += a.x, n += a.y, ++o;
            }
        }
        return {
            x: s / o,
            y: n / o
        };
    },
    nearest (i, t) {
        if (!i.length) return !1;
        let e = t.x, s = t.y, n = Number.POSITIVE_INFINITY, o, r, a;
        for(o = 0, r = i.length; o < r; ++o){
            const l = i[o].element;
            if (l && l.hasValue()) {
                const c = l.getCenterPoint(), h = bi(t, c);
                h < n && (n = h, a = l);
            }
        }
        if (a) {
            const l = a.tooltipPosition();
            e = l.x, s = l.y;
        }
        return {
            x: e,
            y: s
        };
    }
};
function rt(i, t) {
    return t && (z(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function ht(i) {
    return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function xc(i, t) {
    const { element: e, datasetIndex: s, index: n } = t, o = i.getDatasetMeta(s).controller, { label: r, value: a } = o.getLabelAndValue(n);
    return {
        chart: i,
        label: r,
        parsed: o.getParsed(n),
        raw: i.data.datasets[s].data[n],
        formattedValue: a,
        dataset: o.getDataset(),
        dataIndex: n,
        datasetIndex: s,
        element: e
    };
}
function Ks(i, t) {
    const e = i.chart.ctx, { body: s, footer: n, title: o } = i, { boxWidth: r, boxHeight: a } = t, l = $(t.bodyFont), c = $(t.titleFont), h = $(t.footerFont), d = o.length, u = n.length, f = s.length, g = K(t.padding);
    let p = g.height, m = 0, b = s.reduce((y, _)=>y + _.before.length + _.lines.length + _.after.length, 0);
    if (b += i.beforeBody.length + i.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), b) {
        const y = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
        p += f * y + (b - f) * l.lineHeight + (b - 1) * t.bodySpacing;
    }
    u && (p += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
    let x = 0;
    const v = function(y) {
        m = Math.max(m, e.measureText(y).width + x);
    };
    return e.save(), e.font = c.string, E(i.title, v), e.font = l.string, E(i.beforeBody.concat(i.afterBody), v), x = t.displayColors ? r + 2 + t.boxPadding : 0, E(s, (y)=>{
        E(y.before, v), E(y.lines, v), E(y.after, v);
    }), x = 0, e.font = h.string, E(i.footer, v), e.restore(), m += g.width, {
        width: m,
        height: p
    };
}
function _c(i, t) {
    const { y: e, height: s } = t;
    return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function yc(i, t, e, s) {
    const { x: n, width: o } = s, r = e.caretSize + e.caretPadding;
    if (i === "left" && n + o + r > t.width || i === "right" && n - o - r < 0) return !0;
}
function vc(i, t, e, s) {
    const { x: n, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
    let c = "center";
    return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= r - o / 2 && (c = "right"), yc(c, i, t, e) && (c = "center"), c;
}
function qs(i, t, e) {
    const s = e.yAlign || t.yAlign || _c(i, e);
    return {
        xAlign: e.xAlign || t.xAlign || vc(i, t, e, s),
        yAlign: s
    };
}
function Mc(i, t) {
    let { x: e, width: s } = i;
    return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function kc(i, t, e) {
    let { y: s, height: n } = i;
    return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function Gs(i, t, e, s) {
    const { caretSize: n, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = n + o, { topLeft: h, topRight: d, bottomLeft: u, bottomRight: f } = Dt(r);
    let g = Mc(t, a);
    const p = kc(t, l, c);
    return l === "center" ? a === "left" ? g += c : a === "right" && (g -= c) : a === "left" ? g -= Math.max(h, u) + n : a === "right" && (g += Math.max(d, f) + n), {
        x: Y(g, 0, s.width - t.width),
        y: Y(p, 0, s.height - t.height)
    };
}
function Ee(i, t, e) {
    const s = K(e.padding);
    return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function Zs(i) {
    return rt([], ht(i));
}
function wc(i, t, e) {
    return vt(i, {
        tooltip: t,
        tooltipItems: e,
        type: "tooltip"
    });
}
function Js(i, t) {
    const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
    return e ? i.override(e) : i;
}
class Ci extends st {
    constructor(t){
        super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart || t._chart, this._chart = this.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
    }
    initialize(t) {
        this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
    }
    _resolveAnimations() {
        const t = this._cachedAnimations;
        if (t) return t;
        const e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new Ni(this.chart, n);
        return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
    }
    getContext() {
        return this.$context || (this.$context = wc(this.chart.getContext(), this, this._tooltipItems));
    }
    getTitle(t, e) {
        const { callbacks: s } = e, n = s.beforeTitle.apply(this, [
            t
        ]), o = s.title.apply(this, [
            t
        ]), r = s.afterTitle.apply(this, [
            t
        ]);
        let a = [];
        return a = rt(a, ht(n)), a = rt(a, ht(o)), a = rt(a, ht(r)), a;
    }
    getBeforeBody(t, e) {
        return Zs(e.callbacks.beforeBody.apply(this, [
            t
        ]));
    }
    getBody(t, e) {
        const { callbacks: s } = e, n = [];
        return E(t, (o)=>{
            const r = {
                before: [],
                lines: [],
                after: []
            }, a = Js(s, o);
            rt(r.before, ht(a.beforeLabel.call(this, o))), rt(r.lines, a.label.call(this, o)), rt(r.after, ht(a.afterLabel.call(this, o))), n.push(r);
        }), n;
    }
    getAfterBody(t, e) {
        return Zs(e.callbacks.afterBody.apply(this, [
            t
        ]));
    }
    getFooter(t, e) {
        const { callbacks: s } = e, n = s.beforeFooter.apply(this, [
            t
        ]), o = s.footer.apply(this, [
            t
        ]), r = s.afterFooter.apply(this, [
            t
        ]);
        let a = [];
        return a = rt(a, ht(n)), a = rt(a, ht(o)), a = rt(a, ht(r)), a;
    }
    _createItems(t) {
        const e = this._active, s = this.chart.data, n = [], o = [], r = [];
        let a = [], l, c;
        for(l = 0, c = e.length; l < c; ++l)a.push(xc(this.chart, e[l]));
        return t.filter && (a = a.filter((h, d, u)=>t.filter(h, d, u, s))), t.itemSort && (a = a.sort((h, d)=>t.itemSort(h, d, s))), E(a, (h)=>{
            const d = Js(t.callbacks, h);
            n.push(d.labelColor.call(this, h)), o.push(d.labelPointStyle.call(this, h)), r.push(d.labelTextColor.call(this, h));
        }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a;
    }
    update(t, e) {
        const s = this.options.setContext(this.getContext()), n = this._active;
        let o, r = [];
        if (!n.length) this.opacity !== 0 && (o = {
            opacity: 0
        });
        else {
            const a = se[s.position].call(this, n, this._eventPosition);
            r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
            const l = this._size = Ks(this, s), c = Object.assign({}, a, l), h = qs(this.chart, s, c), d = Gs(s, c, h, this.chart);
            this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
                opacity: 1,
                x: d.x,
                y: d.y,
                width: l.width,
                height: l.height,
                caretX: a.x,
                caretY: a.y
            };
        }
        this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && s.external && s.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay: e
        });
    }
    drawCaret(t, e, s, n) {
        const o = this.getCaretPosition(t, s, n);
        e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
    }
    getCaretPosition(t, e, s) {
        const { xAlign: n, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = Dt(a), { x: u, y: f } = t, { width: g, height: p } = e;
        let m, b, x, v, y, _;
        return o === "center" ? (y = f + p / 2, n === "left" ? (m = u, b = m - r, v = y + r, _ = y - r) : (m = u + g, b = m + r, v = y - r, _ = y + r), x = m) : (n === "left" ? b = u + Math.max(l, h) + r : n === "right" ? b = u + g - Math.max(c, d) - r : b = this.caretX, o === "top" ? (v = f, y = v - r, m = b - r, x = b + r) : (v = f + p, y = v + r, m = b + r, x = b - r), _ = v), {
            x1: m,
            x2: b,
            x3: x,
            y1: v,
            y2: y,
            y3: _
        };
    }
    drawTitle(t, e, s) {
        const n = this.title, o = n.length;
        let r, a, l;
        if (o) {
            const c = zt(s.rtl, this.x, this.width);
            for(t.x = Ee(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", r = $(s.titleFont), a = s.titleSpacing, e.fillStyle = s.titleColor, e.font = r.string, l = 0; l < o; ++l)e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
        }
    }
    _drawColorBox(t, e, s, n, o) {
        const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c, boxPadding: h } = o, d = $(o.bodyFont), u = Ee(this, "left", o), f = n.x(u), g = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0, p = e.y + g;
        if (o.usePointStyle) {
            const m = {
                radius: Math.min(c, l) / 2,
                pointStyle: a.pointStyle,
                rotation: a.rotation,
                borderWidth: 1
            }, b = n.leftForLtr(f, c) + c / 2, x = p + l / 2;
            t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, yi(t, m, b, x), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, yi(t, m, b, x);
        } else {
            t.lineWidth = D(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
            const m = n.leftForLtr(f, c - h), b = n.leftForLtr(n.xPlus(f, 1), c - h - 2), x = Dt(r.borderRadius);
            Object.values(x).some((v)=>v !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, ae(t, {
                x: m,
                y: p,
                w: c,
                h: l,
                radius: x
            }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), ae(t, {
                x: b,
                y: p + 1,
                w: c - 2,
                h: l - 2,
                radius: x
            }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(m, p, c, l), t.strokeRect(m, p, c, l), t.fillStyle = r.backgroundColor, t.fillRect(b, p + 1, c - 2, l - 2));
        }
        t.fillStyle = this.labelTextColors[s];
    }
    drawBody(t, e, s) {
        const { body: n } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: h } = s, d = $(s.bodyFont);
        let u = d.lineHeight, f = 0;
        const g = zt(s.rtl, this.x, this.width), p = function(S) {
            e.fillText(S, g.x(t.x + f), t.y + u / 2), t.y += u + o;
        }, m = g.textAlign(r);
        let b, x, v, y, _, M, k;
        for(e.textAlign = r, e.textBaseline = "middle", e.font = d.string, t.x = Ee(this, m, s), e.fillStyle = s.bodyColor, E(this.beforeBody, p), f = a && m !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, y = 0, M = n.length; y < M; ++y){
            for(b = n[y], x = this.labelTextColors[y], e.fillStyle = x, E(b.before, p), v = b.lines, a && v.length && (this._drawColorBox(e, t, y, g, s), u = Math.max(d.lineHeight, l)), _ = 0, k = v.length; _ < k; ++_)p(v[_]), u = d.lineHeight;
            E(b.after, p);
        }
        f = 0, u = d.lineHeight, E(this.afterBody, p), t.y -= o;
    }
    drawFooter(t, e, s) {
        const n = this.footer, o = n.length;
        let r, a;
        if (o) {
            const l = zt(s.rtl, this.x, this.width);
            for(t.x = Ee(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", r = $(s.footerFont), e.fillStyle = s.footerColor, e.font = r.string, a = 0; a < o; ++a)e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
        }
    }
    drawBackground(t, e, s, n) {
        const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: h } = s, { topLeft: d, topRight: u, bottomLeft: f, bottomRight: g } = Dt(n.cornerRadius);
        e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + d, l), r === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - u, l), e.quadraticCurveTo(a + c, l, a + c, l + u), r === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + h - g), e.quadraticCurveTo(a + c, l + h, a + c - g, l + h), r === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + f, l + h), e.quadraticCurveTo(a, l + h, a, l + h - f), r === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + d), e.quadraticCurveTo(a, l, a + d, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
    }
    _updateAnimationTarget(t) {
        const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
        if (n || o) {
            const r = se[t.position].call(this, this._active, this._eventPosition);
            if (!r) return;
            const a = this._size = Ks(this, t), l = Object.assign({}, r, this._size), c = qs(e, t, l), h = Gs(t, l, c, e);
            (n._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, h));
        }
    }
    _willRender() {
        return !!this.opacity;
    }
    draw(t) {
        const e = this.options.setContext(this.getContext());
        let s = this.opacity;
        if (!s) return;
        this._updateAnimationTarget(e);
        const n = {
            width: this.width,
            height: this.height
        }, o = {
            x: this.x,
            y: this.y
        };
        s = Math.abs(s) < 1e-3 ? 0 : s;
        const r = K(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        e.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Tn(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Ln(t, e.textDirection), t.restore());
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(t, e) {
        const s = this._active, n = t.map(({ datasetIndex: a, index: l })=>{
            const c = this.chart.getDatasetMeta(a);
            if (!c) throw new Error("Cannot find a dataset at index " + a);
            return {
                datasetIndex: a,
                element: c.data[l],
                index: l
            };
        }), o = !ze(s, n), r = this._positionChanged(n, e);
        (o || r) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
    }
    handleEvent(t, e, s = !0) {
        if (e && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;
        const n = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, s), a = this._positionChanged(r, t), l = e || !ze(r, o) || a;
        return l && (this._active = r, (n.enabled || n.external) && (this._eventPosition = {
            x: t.x,
            y: t.y
        }, this.update(!0, e))), l;
    }
    _getActiveElements(t, e, s, n) {
        const o = this.options;
        if (t.type === "mouseout") return [];
        if (!n) return e;
        const r = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
        return o.reverse && r.reverse(), r;
    }
    _positionChanged(t, e) {
        const { caretX: s, caretY: n, options: o } = this, r = se[o.position].call(this, t, e);
        return r !== !1 && (s !== r.x || n !== r.y);
    }
}
Ci.positioners = se;
var po = {
    id: "tooltip",
    _element: Ci,
    positioners: se,
    afterInit (i, t, e) {
        e && (i.tooltip = new Ci({
            chart: i,
            options: e
        }));
    },
    beforeUpdate (i, t, e) {
        i.tooltip && i.tooltip.initialize(e);
    },
    reset (i, t, e) {
        i.tooltip && i.tooltip.initialize(e);
    },
    afterDraw (i) {
        const t = i.tooltip;
        if (t && t._willRender()) {
            const e = {
                tooltip: t
            };
            if (i.notifyPlugins("beforeTooltipDraw", e) === !1) return;
            t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e);
        }
    },
    afterEvent (i, t) {
        if (i.tooltip) {
            const e = t.replay;
            i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
        }
    },
    defaults: {
        enabled: !0,
        external: null,
        position: "average",
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#fff",
        titleFont: {
            weight: "bold"
        },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: "left",
        bodyColor: "#fff",
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: "left",
        footerColor: "#fff",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: {
            weight: "bold"
        },
        footerAlign: "left",
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (i, t)=>t.bodyFont.size,
        boxWidth: (i, t)=>t.bodyFont.size,
        multiKeyBackground: "#fff",
        displayColors: !0,
        boxPadding: 0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        animation: {
            duration: 400,
            easing: "easeOutQuart"
        },
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "x",
                    "y",
                    "width",
                    "height",
                    "caretX",
                    "caretY"
                ]
            },
            opacity: {
                easing: "linear",
                duration: 200
            }
        },
        callbacks: {
            beforeTitle: ct,
            title (i) {
                if (i.length > 0) {
                    const t = i[0], e = t.chart.data.labels, s = e ? e.length : 0;
                    if (this && this.options && this.options.mode === "dataset") return t.dataset.label || "";
                    if (t.label) return t.label;
                    if (s > 0 && t.dataIndex < s) return e[t.dataIndex];
                }
                return "";
            },
            afterTitle: ct,
            beforeBody: ct,
            beforeLabel: ct,
            label (i) {
                if (this && this.options && this.options.mode === "dataset") return i.label + ": " + i.formattedValue || i.formattedValue;
                let t = i.dataset.label || "";
                t && (t += ": ");
                const e = i.formattedValue;
                return T(e) || (t += e), t;
            },
            labelColor (i) {
                const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
                return {
                    borderColor: e.borderColor,
                    backgroundColor: e.backgroundColor,
                    borderWidth: e.borderWidth,
                    borderDash: e.borderDash,
                    borderDashOffset: e.borderDashOffset,
                    borderRadius: 0
                };
            },
            labelTextColor () {
                return this.options.bodyColor;
            },
            labelPointStyle (i) {
                const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
                return {
                    pointStyle: e.pointStyle,
                    rotation: e.rotation
                };
            },
            afterLabel: ct,
            afterBody: ct,
            beforeFooter: ct,
            footer: ct,
            afterFooter: ct
        }
    },
    defaultRoutes: {
        bodyFont: "font",
        footerFont: "font",
        titleFont: "font"
    },
    descriptors: {
        _scriptable: (i)=>i !== "filter" && i !== "itemSort" && i !== "external",
        _indexable: !1,
        callbacks: {
            _scriptable: !1,
            _indexable: !1
        },
        animation: {
            _fallback: !1
        },
        animations: {
            _fallback: "animation"
        }
    },
    additionalOptionScopes: [
        "interaction"
    ]
}, mo = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Decimation: ao,
    Filler: ho,
    Legend: uo,
    SubTitle: go,
    Title: fo,
    Tooltip: po
});
const Sc = (i, t, e, s)=>(typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
        index: e,
        label: t
    })) : isNaN(t) && (e = null), e);
function Pc(i, t, e, s) {
    const n = i.indexOf(t);
    if (n === -1) return Sc(i, t, e, s);
    const o = i.lastIndexOf(t);
    return n !== o ? e : n;
}
const Cc = (i, t)=>i === null ? null : Y(Math.round(i), 0, t);
class ce extends Mt {
    constructor(t){
        super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
    }
    init(t) {
        const e = this._addedLabels;
        if (e.length) {
            const s = this.getLabels();
            for (const { index: n, label: o } of e)s[n] === o && s.splice(n, 1);
            this._addedLabels = [];
        }
        super.init(t);
    }
    parse(t, e) {
        if (T(t)) return null;
        const s = this.getLabels();
        return e = isFinite(e) && s[e] === t ? e : Pc(s, t, C(e, t), this._addedLabels), Cc(e, s.length - 1);
    }
    determineDataLimits() {
        const { minDefined: t, maxDefined: e } = this.getUserBounds();
        let { min: s, max: n } = this.getMinMax(!0);
        this.options.bounds === "ticks" && (t || (s = 0), e || (n = this.getLabels().length - 1)), this.min = s, this.max = n;
    }
    buildTicks() {
        const t = this.min, e = this.max, s = this.options.offset, n = [];
        let o = this.getLabels();
        o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? 0.5 : 0);
        for(let r = t; r <= e; r++)n.push({
            value: r
        });
        return n;
    }
    getLabelForValue(t) {
        const e = this.getLabels();
        return t >= 0 && t < e.length ? e[t] : t;
    }
    configure() {
        super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
    }
    getPixelForValue(t) {
        return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
    }
    getPixelForTick(t) {
        const e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
    }
    getValueForPixel(t) {
        return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
    }
    getBasePixel() {
        return this.bottom;
    }
}
ce.id = "category";
ce.defaults = {
    ticks: {
        callback: ce.prototype.getLabelForValue
    }
};
function Dc(i, t) {
    const e = [], { bounds: n, step: o, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: u } = i, f = o || 1, g = h - 1, { min: p, max: m } = t, b = !T(r), x = !T(a), v = !T(c), y = (m - p) / (d + 1);
    let _ = qi((m - p) / g / f) * f, M, k, S, w;
    if (_ < 1e-14 && !b && !x) return [
        {
            value: p
        },
        {
            value: m
        }
    ];
    w = Math.ceil(m / _) - Math.floor(p / _), w > g && (_ = qi(w * _ / g / f) * f), T(l) || (M = Math.pow(10, l), _ = Math.ceil(_ * M) / M), n === "ticks" ? (k = Math.floor(p / _) * _, S = Math.ceil(m / _) * _) : (k = p, S = m), b && x && o && Oo((a - r) / o, _ / 1e3) ? (w = Math.round(Math.min((a - r) / _, h)), _ = (a - r) / w, k = r, S = a) : v ? (k = b ? r : k, S = x ? a : S, w = c - 1, _ = (S - k) / w) : (w = (S - k) / _, te(w, Math.round(w), _ / 1e3) ? w = Math.round(w) : w = Math.ceil(w));
    const L = Math.max(Gi(_), Gi(k));
    M = Math.pow(10, T(l) ? L : l), k = Math.round(k * M) / M, S = Math.round(S * M) / M;
    let R = 0;
    for(b && (u && k !== r ? (e.push({
        value: r
    }), k < r && R++, te(Math.round((k + R * _) * M) / M, r, Qs(r, y, i)) && R++) : k < r && R++); R < w; ++R)e.push({
        value: Math.round((k + R * _) * M) / M
    });
    return x && u && S !== a ? e.length && te(e[e.length - 1].value, a, Qs(a, y, i)) ? e[e.length - 1].value = a : e.push({
        value: a
    }) : (!x || S === a) && e.push({
        value: S
    }), e;
}
function Qs(i, t, { horizontal: e, minRotation: s }) {
    const n = nt(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, r = 0.75 * t * ("" + i).length;
    return Math.min(t / o, r);
}
class Ye extends Mt {
    constructor(t){
        super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
    }
    parse(t, e) {
        return T(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
    }
    handleTickRangeOptions() {
        const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds();
        let { min: n, max: o } = this;
        const r = (l)=>n = e ? n : l, a = (l)=>o = s ? o : l;
        if (t) {
            const l = lt(n), c = lt(o);
            l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
        }
        if (n === o) {
            let l = 1;
            (o >= Number.MAX_SAFE_INTEGER || n <= Number.MIN_SAFE_INTEGER) && (l = Math.abs(o * 0.05)), a(o + l), t || r(n - l);
        }
        this.min = n, this.max = o;
    }
    getTickLimit() {
        const t = this.options.ticks;
        let { maxTicksLimit: e, stepSize: s } = t, n;
        return s ? (n = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n;
    }
    computeTickLimit() {
        return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
        const t = this.options, e = t.ticks;
        let s = this.getTickLimit();
        s = Math.max(2, s);
        const n = {
            maxTicks: s,
            bounds: t.bounds,
            min: t.min,
            max: t.max,
            precision: e.precision,
            step: e.stepSize,
            count: e.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: e.minRotation || 0,
            includeBounds: e.includeBounds !== !1
        }, o = this._range || this, r = Dc(n, o);
        return t.bounds === "ticks" && cn(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
    }
    configure() {
        const t = this.ticks;
        let e = this.min, s = this.max;
        if (super.configure(), this.options.offset && t.length) {
            const n = (s - e) / Math.max(t.length - 1, 1) / 2;
            e -= n, s += n;
        }
        this._startValue = e, this._endValue = s, this._valueRange = s - e;
    }
    getLabelForValue(t) {
        return de(t, this.chart.options.locale, this.options.ticks.format);
    }
}
class Ge extends Ye {
    determineDataLimits() {
        const { min: t, max: e } = this.getMinMax(!0);
        this.min = N(t) ? t : 0, this.max = N(e) ? e : 1, this.handleTickRangeOptions();
    }
    computeTickLimit() {
        const t = this.isHorizontal(), e = t ? this.width : this.height, s = nt(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
        return Math.ceil(e / Math.min(40, o.lineHeight / n));
    }
    getPixelForValue(t) {
        return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
    }
    getValueForPixel(t) {
        return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
    }
}
Ge.id = "linear";
Ge.defaults = {
    ticks: {
        callback: be.formatters.numeric
    }
};
function tn(i) {
    return i / Math.pow(10, Math.floor(tt(i))) === 1;
}
function Oc(i, t) {
    const e = Math.floor(tt(t.max)), s = Math.ceil(t.max / Math.pow(10, e)), n = [];
    let o = Q(i.min, Math.pow(10, Math.floor(tt(t.min)))), r = Math.floor(tt(o)), a = Math.floor(o / Math.pow(10, r)), l = r < 0 ? Math.pow(10, Math.abs(r)) : 1;
    do n.push({
        value: o,
        major: tn(o)
    }), ++a, a === 10 && (a = 1, ++r, l = r >= 0 ? 1 : l), o = Math.round(a * Math.pow(10, r) * l) / l;
    while (r < e || r === e && a < s);
    const c = Q(i.max, o);
    return n.push({
        value: c,
        major: tn(o)
    }), n;
}
class Ze extends Mt {
    constructor(t){
        super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
    }
    parse(t, e) {
        const s = Ye.prototype.parse.apply(this, [
            t,
            e
        ]);
        if (s === 0) {
            this._zero = !0;
            return;
        }
        return N(s) && s > 0 ? s : null;
    }
    determineDataLimits() {
        const { min: t, max: e } = this.getMinMax(!0);
        this.min = N(t) ? Math.max(0, t) : null, this.max = N(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
        const { minDefined: t, maxDefined: e } = this.getUserBounds();
        let s = this.min, n = this.max;
        const o = (l)=>s = t ? s : l, r = (l)=>n = e ? n : l, a = (l, c)=>Math.pow(10, Math.floor(tt(l)) + c);
        s === n && (s <= 0 ? (o(1), r(10)) : (o(a(s, -1)), r(a(n, 1)))), s <= 0 && o(a(n, -1)), n <= 0 && r(a(s, 1)), this._zero && this.min !== this._suggestedMin && s === a(this.min, 0) && o(a(s, -1)), this.min = s, this.max = n;
    }
    buildTicks() {
        const t = this.options, e = {
            min: this._userMin,
            max: this._userMax
        }, s = Oc(e, this);
        return t.bounds === "ticks" && cn(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s;
    }
    getLabelForValue(t) {
        return t === void 0 ? "0" : de(t, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
        const t = this.min;
        super.configure(), this._startValue = tt(t), this._valueRange = tt(this.max) - tt(t);
    }
    getPixelForValue(t) {
        return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (tt(t) - this._startValue) / this._valueRange);
    }
    getValueForPixel(t) {
        const e = this.getDecimalForPixel(t);
        return Math.pow(10, this._startValue + e * this._valueRange);
    }
}
Ze.id = "logarithmic";
Ze.defaults = {
    ticks: {
        callback: be.formatters.logarithmic,
        major: {
            enabled: !0
        }
    }
};
function Di(i) {
    const t = i.ticks;
    if (t.display && i.display) {
        const e = K(t.backdropPadding);
        return C(t.font && t.font.size, O.font.size) + e.height;
    }
    return 0;
}
function Ac(i, t, e) {
    return e = z(e) ? e : [
        e
    ], {
        w: ar(i, t.string, e),
        h: e.length * t.lineHeight
    };
}
function en(i, t, e, s, n) {
    return i === s || i === n ? {
        start: t - e / 2,
        end: t + e / 2
    } : i < s || i > n ? {
        start: t - e,
        end: t
    } : {
        start: t,
        end: t + e
    };
}
function Tc(i) {
    const t = {
        l: i.left + i._padding.left,
        r: i.right - i._padding.right,
        t: i.top + i._padding.top,
        b: i.bottom - i._padding.bottom
    }, e = Object.assign({}, t), s = [], n = [], o = i._pointLabels.length, r = i.options.pointLabels, a = r.centerPointLabels ? B / o : 0;
    for(let l = 0; l < o; l++){
        const c = r.setContext(i.getPointLabelContext(l));
        n[l] = c.padding;
        const h = i.getPointPosition(l, i.drawingArea + n[l], a), d = $(c.font), u = Ac(i.ctx, d, i._pointLabels[l]);
        s[l] = u;
        const f = Z(i.getIndexAngle(l) + a), g = Math.round(Ai(f)), p = en(g, h.x, u.w, 0, 180), m = en(g, h.y, u.h, 90, 270);
        Lc(e, t, f, p, m);
    }
    i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = Rc(i, s, n);
}
function Lc(i, t, e, s, n) {
    const o = Math.abs(Math.sin(e)), r = Math.abs(Math.cos(e));
    let a = 0, l = 0;
    s.start < t.l ? (a = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - a)) : s.end > t.r && (a = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + a)), n.start < t.t ? (l = (t.t - n.start) / r, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / r, i.b = Math.max(i.b, t.b + l));
}
function Rc(i, t, e) {
    const s = [], n = i._pointLabels.length, o = i.options, r = Di(o) / 2, a = i.drawingArea, l = o.pointLabels.centerPointLabels ? B / n : 0;
    for(let c = 0; c < n; c++){
        const h = i.getPointPosition(c, a + r + e[c], l), d = Math.round(Ai(Z(h.angle + V))), u = t[c], f = Ic(h.y, u.h, d), g = Ec(d), p = Fc(h.x, u.w, g);
        s.push({
            x: h.x,
            y: f,
            textAlign: g,
            left: p,
            top: f,
            right: p + u.w,
            bottom: f + u.h
        });
    }
    return s;
}
function Ec(i) {
    return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function Fc(i, t, e) {
    return e === "right" ? i -= t : e === "center" && (i -= t / 2), i;
}
function Ic(i, t, e) {
    return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i;
}
function zc(i, t) {
    const { ctx: e, options: { pointLabels: s } } = i;
    for(let n = t - 1; n >= 0; n--){
        const o = s.setContext(i.getPointLabelContext(n)), r = $(o.font), { x: a, y: l, textAlign: c, left: h, top: d, right: u, bottom: f } = i._pointLabelItems[n], { backdropColor: g } = o;
        if (!T(g)) {
            const p = Dt(o.borderRadius), m = K(o.backdropPadding);
            e.fillStyle = g;
            const b = h - m.left, x = d - m.top, v = u - h + m.width, y = f - d + m.height;
            Object.values(p).some((_)=>_ !== 0) ? (e.beginPath(), ae(e, {
                x: b,
                y: x,
                w: v,
                h: y,
                radius: p
            }), e.fill()) : e.fillRect(b, x, v, y);
        }
        Tt(e, i._pointLabels[n], a, l + r.lineHeight / 2, r, {
            color: o.color,
            textAlign: c,
            textBaseline: "middle"
        });
    }
}
function bo(i, t, e, s) {
    const { ctx: n } = i;
    if (e) n.arc(i.xCenter, i.yCenter, t, 0, F);
    else {
        let o = i.getPointPosition(0, t);
        n.moveTo(o.x, o.y);
        for(let r = 1; r < s; r++)o = i.getPointPosition(r, t), n.lineTo(o.x, o.y);
    }
}
function Bc(i, t, e, s) {
    const n = i.ctx, o = t.circular, { color: r, lineWidth: a } = t;
    !o && !s || !r || !a || e < 0 || (n.save(), n.strokeStyle = r, n.lineWidth = a, n.setLineDash(t.borderDash), n.lineDashOffset = t.borderDashOffset, n.beginPath(), bo(i, e, o, s), n.closePath(), n.stroke(), n.restore());
}
function Vc(i, t, e) {
    return vt(i, {
        label: e,
        index: t,
        type: "pointLabel"
    });
}
class Nt extends Ye {
    constructor(t){
        super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
    }
    setDimensions() {
        const t = this._padding = K(Di(this.options) / 2), e = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
        this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2);
    }
    determineDataLimits() {
        const { min: t, max: e } = this.getMinMax(!1);
        this.min = N(t) && !isNaN(t) ? t : 0, this.max = N(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / Di(this.options));
    }
    generateTickLabels(t) {
        Ye.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s)=>{
            const n = I(this.options.pointLabels.callback, [
                e,
                s
            ], this);
            return n || n === 0 ? n : "";
        }).filter((e, s)=>this.chart.getDataVisibility(s));
    }
    fit() {
        const t = this.options;
        t.display && t.pointLabels.display ? Tc(this) : this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(t, e, s, n) {
        this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n));
    }
    getIndexAngle(t) {
        const e = F / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
        return Z(t * e + nt(s));
    }
    getDistanceFromCenterForValue(t) {
        if (T(t)) return NaN;
        const e = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
    }
    getValueForDistanceFromCenter(t) {
        if (T(t)) return NaN;
        const e = t / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - e : this.min + e;
    }
    getPointLabelContext(t) {
        const e = this._pointLabels || [];
        if (t >= 0 && t < e.length) {
            const s = e[t];
            return Vc(this.getContext(), t, s);
        }
    }
    getPointPosition(t, e, s = 0) {
        const n = this.getIndexAngle(t) - V + s;
        return {
            x: Math.cos(n) * e + this.xCenter,
            y: Math.sin(n) * e + this.yCenter,
            angle: n
        };
    }
    getPointPositionForValue(t, e) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
    }
    getBasePosition(t) {
        return this.getPointPositionForValue(t || 0, this.getBaseValue());
    }
    getPointLabelPosition(t) {
        const { left: e, top: s, right: n, bottom: o } = this._pointLabelItems[t];
        return {
            left: e,
            top: s,
            right: n,
            bottom: o
        };
    }
    drawBackground() {
        const { backgroundColor: t, grid: { circular: e } } = this.options;
        if (t) {
            const s = this.ctx;
            s.save(), s.beginPath(), bo(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
        }
    }
    drawGrid() {
        const t = this.ctx, e = this.options, { angleLines: s, grid: n } = e, o = this._pointLabels.length;
        let r, a, l;
        if (e.pointLabels.display && zc(this, o), n.display && this.ticks.forEach((c, h)=>{
            if (h !== 0) {
                a = this.getDistanceFromCenterForValue(c.value);
                const d = n.setContext(this.getContext(h - 1));
                Bc(this, d, a, o);
            }
        }), s.display) {
            for(t.save(), r = o - 1; r >= 0; r--){
                const c = s.setContext(this.getPointLabelContext(r)), { color: h, lineWidth: d } = c;
                !d || !h || (t.lineWidth = d, t.strokeStyle = h, t.setLineDash(c.borderDash), t.lineDashOffset = c.borderDashOffset, a = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), l = this.getPointPosition(r, a), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l.x, l.y), t.stroke());
            }
            t.restore();
        }
    }
    drawBorder() {}
    drawLabels() {
        const t = this.ctx, e = this.options, s = e.ticks;
        if (!s.display) return;
        const n = this.getIndexAngle(0);
        let o, r;
        t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((a, l)=>{
            if (l === 0 && !e.reverse) return;
            const c = s.setContext(this.getContext(l)), h = $(c.font);
            if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
                t.font = h.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
                const d = K(c.backdropPadding);
                t.fillRect(-r / 2 - d.left, -o - h.size / 2 - d.top, r + d.width, h.size + d.height);
            }
            Tt(t, a.label, 0, -o, h, {
                color: c.color
            });
        }), t.restore();
    }
    drawTitle() {}
}
Nt.id = "radialLinear";
Nt.defaults = {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
        display: !0,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0
    },
    grid: {
        circular: !1
    },
    startAngle: 0,
    ticks: {
        showLabelBackdrop: !0,
        callback: be.formatters.numeric
    },
    pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: {
            size: 10
        },
        callback (i) {
            return i;
        },
        padding: 5,
        centerPointLabels: !1
    }
};
Nt.defaultRoutes = {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color"
};
Nt.descriptors = {
    angleLines: {
        _fallback: "grid"
    }
};
const Je = {
    millisecond: {
        common: !0,
        size: 1,
        steps: 1e3
    },
    second: {
        common: !0,
        size: 1e3,
        steps: 60
    },
    minute: {
        common: !0,
        size: 6e4,
        steps: 60
    },
    hour: {
        common: !0,
        size: 36e5,
        steps: 24
    },
    day: {
        common: !0,
        size: 864e5,
        steps: 30
    },
    week: {
        common: !1,
        size: 6048e5,
        steps: 4
    },
    month: {
        common: !0,
        size: 2628e6,
        steps: 12
    },
    quarter: {
        common: !1,
        size: 7884e6,
        steps: 4
    },
    year: {
        common: !0,
        size: 3154e7
    }
}, G = Object.keys(Je);
function Wc(i, t) {
    return i - t;
}
function sn(i, t) {
    if (T(t)) return null;
    const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
    let r = t;
    return typeof s == "function" && (r = s(r)), N(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (Bt(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r);
}
function nn(i, t, e, s) {
    const n = G.length;
    for(let o = G.indexOf(i); o < n - 1; ++o){
        const r = Je[G[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
        if (r.common && Math.ceil((e - t) / (a * r.size)) <= s) return G[o];
    }
    return G[n - 1];
}
function Nc(i, t, e, s, n) {
    for(let o = G.length - 1; o >= G.indexOf(e); o--){
        const r = G[o];
        if (Je[r].common && i._adapter.diff(n, s, r) >= t - 1) return r;
    }
    return G[e ? G.indexOf(e) : 0];
}
function Hc(i) {
    for(let t = G.indexOf(i) + 1, e = G.length; t < e; ++t)if (Je[G[t]].common) return G[t];
}
function on(i, t, e) {
    if (!e) i[t] = !0;
    else if (e.length) {
        const { lo: s, hi: n } = Ti(e, t), o = e[s] >= t ? e[s] : e[n];
        i[o] = !0;
    }
}
function jc(i, t, e, s) {
    const n = i._adapter, o = +n.startOf(t[0].value, s), r = t[t.length - 1].value;
    let a, l;
    for(a = o; a <= r; a = +n.add(a, 1, s))l = e[a], l >= 0 && (t[l].major = !0);
    return t;
}
function rn(i, t, e) {
    const s = [], n = {}, o = t.length;
    let r, a;
    for(r = 0; r < o; ++r)a = t[r], n[a] = r, s.push({
        value: a,
        major: !1
    });
    return o === 0 || !e ? s : jc(i, s, n, e);
}
class Ht extends Mt {
    constructor(t){
        super(t), this._cache = {
            data: [],
            labels: [],
            all: []
        }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
    }
    init(t, e) {
        const s = t.time || (t.time = {}), n = this._adapter = new Nn._date(t.adapters.date);
        n.init(e), Qt(s.displayFormats, n.formats()), this._parseOpts = {
            parser: s.parser,
            round: s.round,
            isoWeekday: s.isoWeekday
        }, super.init(t), this._normalized = e.normalized;
    }
    parse(t, e) {
        return t === void 0 ? null : sn(this, t);
    }
    beforeLayout() {
        super.beforeLayout(), this._cache = {
            data: [],
            labels: [],
            all: []
        };
    }
    determineDataLimits() {
        const t = this.options, e = this._adapter, s = t.time.unit || "day";
        let { min: n, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
        function l(c) {
            !r && !isNaN(c.min) && (n = Math.min(n, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
        }
        (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = N(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = N(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
    }
    _getLabelBounds() {
        const t = this.getLabelTimestamps();
        let e = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
        return t.length && (e = t[0], s = t[t.length - 1]), {
            min: e,
            max: s
        };
    }
    buildTicks() {
        const t = this.options, e = t.time, s = t.ticks, n = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
        t.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
        const o = this.min, r = this.max, a = Ro(n, o, r);
        return this._unit = e.unit || (s.autoSkip ? nn(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Nc(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : Hc(this._unit), this.initOffsets(n), t.reverse && a.reverse(), rn(this, a, this._majorUnit);
    }
    afterAutoSkip() {
        this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t)=>+t.value));
    }
    initOffsets(t) {
        let e = 0, s = 0, n, o;
        this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
        const r = t.length < 3 ? 0.5 : 0.25;
        e = Y(e, 0, r), s = Y(s, 0, r), this._offsets = {
            start: e,
            end: s,
            factor: 1 / (e + 1 + s)
        };
    }
    _generate() {
        const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, r = o.unit || nn(o.minUnit, e, s, this._getLabelCapacity(e)), a = C(o.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = Bt(l) || l === !0, h = {};
        let d = e, u, f;
        if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : r), t.diff(s, e, r) > 1e5 * a) throw new Error(e + " and " + s + " are too far apart with stepSize of " + a + " " + r);
        const g = n.ticks.source === "data" && this.getDataTimestamps();
        for(u = d, f = 0; u < s; u = +t.add(u, a, r), f++)on(h, u, g);
        return (u === s || n.bounds === "ticks" || f === 1) && on(h, u, g), Object.keys(h).sort((p, m)=>p - m).map((p)=>+p);
    }
    getLabelForValue(t) {
        const e = this._adapter, s = this.options.time;
        return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime);
    }
    _tickFormatFunction(t, e, s, n) {
        const o = this.options, r = o.time.displayFormats, a = this._unit, l = this._majorUnit, c = a && r[a], h = l && r[l], d = s[e], u = l && h && d && d.major, f = this._adapter.format(t, n || (u ? h : c)), g = o.ticks.callback;
        return g ? I(g, [
            f,
            e,
            s
        ], this) : f;
    }
    generateTickLabels(t) {
        let e, s, n;
        for(e = 0, s = t.length; e < s; ++e)n = t[e], n.label = this._tickFormatFunction(n.value, e, t);
    }
    getDecimalForValue(t) {
        return t === null ? NaN : (t - this.min) / (this.max - this.min);
    }
    getPixelForValue(t) {
        const e = this._offsets, s = this.getDecimalForValue(t);
        return this.getPixelForDecimal((e.start + s) * e.factor);
    }
    getValueForPixel(t) {
        const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
        return this.min + s * (this.max - this.min);
    }
    _getLabelSize(t) {
        const e = this.options.ticks, s = this.ctx.measureText(t).width, n = nt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), r = Math.sin(n), a = this._resolveTickFontOptions(0).size;
        return {
            w: s * o + a * r,
            h: s * r + a * o
        };
    }
    _getLabelCapacity(t) {
        const e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, rn(this, [
            t
        ], this._majorUnit), n), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
        return a > 0 ? a : 1;
    }
    getDataTimestamps() {
        let t = this._cache.data || [], e, s;
        if (t.length) return t;
        const n = this.getMatchingVisibleMetas();
        if (this._normalized && n.length) return this._cache.data = n[0].controller.getAllParsedValues(this);
        for(e = 0, s = n.length; e < s; ++e)t = t.concat(n[e].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(t);
    }
    getLabelTimestamps() {
        const t = this._cache.labels || [];
        let e, s;
        if (t.length) return t;
        const n = this.getLabels();
        for(e = 0, s = n.length; e < s; ++e)t.push(sn(this, n[e]));
        return this._cache.labels = this._normalized ? t : this.normalize(t);
    }
    normalize(t) {
        return un(t.sort(Wc));
    }
}
Ht.id = "time";
Ht.defaults = {
    bounds: "data",
    adapters: {},
    time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: "millisecond",
        displayFormats: {}
    },
    ticks: {
        source: "auto",
        major: {
            enabled: !1
        }
    }
};
function Fe(i, t, e) {
    let s = 0, n = i.length - 1, o, r, a, l;
    e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = ft(i, "pos", t)), { pos: o, time: a } = i[s], { pos: r, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = ft(i, "time", t)), { time: o, pos: a } = i[s], { time: r, pos: l } = i[n]);
    const c = r - o;
    return c ? a + (l - a) * (t - o) / c : a;
}
class Qe extends Ht {
    constructor(t){
        super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
    }
    initOffsets() {
        const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
        this._minPos = Fe(e, this.min), this._tableRange = Fe(e, this.max) - this._minPos, super.initOffsets(t);
    }
    buildLookupTable(t) {
        const { min: e, max: s } = this, n = [], o = [];
        let r, a, l, c, h;
        for(r = 0, a = t.length; r < a; ++r)c = t[r], c >= e && c <= s && n.push(c);
        if (n.length < 2) return [
            {
                time: e,
                pos: 0
            },
            {
                time: s,
                pos: 1
            }
        ];
        for(r = 0, a = n.length; r < a; ++r)h = n[r + 1], l = n[r - 1], c = n[r], Math.round((h + l) / 2) !== c && o.push({
            time: c,
            pos: r / (a - 1)
        });
        return o;
    }
    _getTimestampsForTable() {
        let t = this._cache.all || [];
        if (t.length) return t;
        const e = this.getDataTimestamps(), s = this.getLabelTimestamps();
        return e.length && s.length ? t = this.normalize(e.concat(s)) : t = e.length ? e : s, t = this._cache.all = t, t;
    }
    getDecimalForValue(t) {
        return (Fe(this._table, t) - this._minPos) / this._tableRange;
    }
    getValueForPixel(t) {
        const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
        return Fe(this._table, s * this._tableRange + this._minPos, !0);
    }
}
Qe.id = "timeseries";
Qe.defaults = Ht.defaults;
var xo = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    CategoryScale: ce,
    LinearScale: Ge,
    LogarithmicScale: Ze,
    RadialLinearScale: Nt,
    TimeScale: Ht,
    TimeSeriesScale: Qe
});
const $c = [
    Wn,
    oo,
    mo,
    xo
], Yc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    Animation: In,
    Animations: Ni,
    ArcElement: ye,
    BarController: ue,
    BarElement: Me,
    BasePlatform: Hi,
    BasicPlatform: Yn,
    BubbleController: fe,
    CategoryScale: ce,
    Chart: ji,
    DatasetController: it,
    Decimation: ao,
    DomPlatform: Kn,
    DoughnutController: Lt,
    Element: st,
    Filler: ho,
    Interaction: Hn,
    Legend: uo,
    LineController: ge,
    LineElement: gt,
    LinearScale: Ge,
    LogarithmicScale: Ze,
    PieController: qe,
    PointElement: ve,
    PolarAreaController: pe,
    RadarController: me,
    RadialLinearScale: Nt,
    Scale: Mt,
    ScatterController: xe,
    SubTitle: go,
    Ticks: be,
    TimeScale: Ht,
    TimeSeriesScale: Qe,
    Title: fo,
    Tooltip: po,
    _adapters: Nn,
    _detectPlatform: qn,
    animator: at,
    controllers: Wn,
    defaults: O,
    elements: oo,
    layouts: X,
    plugins: mo,
    registerables: $c,
    registry: ot,
    scales: xo
}, Symbol.toStringTag, {
    value: "Module"
}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jHxYx"], null, "parcelRequire096c")

//# sourceMappingURL=chart.es.7ed5bab9.js.map
