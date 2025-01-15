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
})({"3qo0Z":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "76f3df2a462a9b78";
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

},{}],"jmsaX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _messagesJson = require("../messages.json");
var _chartIconPng = require("../assets/chart-icon.png");
var _chartIconPngDefault = parcelHelpers.interopDefault(_chartIconPng);
document.addEventListener("DOMContentLoaded", function() {
    function shuffle(array) {
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [
                array[j],
                array[i]
            ];
        }
    }
    shuffle(_messagesJson);
    console.log(_messagesJson);
    let currentIndex = 0;
    const alertElement = document.getElementById("alert-msg");
    function showAlert(message) {
        // Use a regular expression to find the amount and wrap it in a <strong> tag
        const formattedMessage = message.replace(/(\$\d{1,3}(,\d{3})*(\.\d{2})?|€\d{1,3}(,\d{3})*(\.\d{2})?|£\d{1,3}(,\d{3})*(\.\d{2})?)/, "<strong>$1</strong>");
        alertElement.innerHTML = `<img class="w-6" src="${0, _chartIconPngDefault.default}" /><span>${formattedMessage}</span>`;
        alertElement.classList.remove("hide");
        alertElement.classList.add("show");
        // Hide the alert after 3 seconds
        setTimeout(function() {
            alertElement.classList.remove("show");
            alertElement.classList.add("hide");
        }, 8000);
    }
    function loopMessages() {
        showAlert(_messagesJson[currentIndex]);
        currentIndex = (currentIndex + 1) % _messagesJson.length;
        setTimeout(loopMessages, 10000); // Wait 4 seconds before showing the next message
    }
    setTimeout(()=>{
        loopMessages();
    }, 5000);
});

},{"../messages.json":"jcP8Z","../assets/chart-icon.png":"a7nDL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jcP8Z":[function(require,module,exports) {
module.exports = JSON.parse('["Smith from New York earned $57,309.82 49 minutes ago.","Johnson from Los Angeles earned $68,209.47 12 minutes ago.","Williams from Chicago earned $75,603.27 37 minutes ago.","Brown from Houston earned $62,108.91 25 minutes ago.","Jones from Philadelphia earned $79,408.36 18 minutes ago.","Davis from Phoenix earned $66,507.84 21 minutes ago.","Miller from San Antonio earned $73,209.67 33 minutes ago.","Wilson from San Diego earned $60,902.18 45 minutes ago.","Moore from Dallas earned $77,809.25 28 minutes ago.","Taylor from San Jose earned $69,705.82 40 minutes ago.","Anderson from Jacksonville earned $72,608.74 55 minutes ago.","Thomas from San Francisco earned $68,103.42 42 minutes ago.","Jackson from Indianapolis earned $75,308.97 15 minutes ago.","White from Columbus earned $61,507.84 26 minutes ago.","Harris from Fort Worth earned $78,409.33 31 minutes ago.","Martin from Charlotte earned $64,902.61 39 minutes ago.","Thompson from Detroit earned $71,607.84 47 minutes ago.","Garc\xeda from Berlin earned \u20AC53,204.78 4 minutes ago.","Mart\xednez from Hamburg earned \u20AC64,908.47 10 minutes ago.","Rodr\xedguez from Munich earned \u20AC70,903.52 22 minutes ago.","L\xf3pez from Frankfurt earned \u20AC77,608.62 35 minutes ago.","Gonz\xe1lez from Cologne earned \u20AC68,502.31 41 minutes ago.","P\xe9rez from Stuttgart earned \u20AC74,609.48 20 minutes ago.","S\xe1nchez from Dusseldorf earned \u20AC60,504.88 38 minutes ago.","Ram\xedrez from Leipzig earned \u20AC79,804.27 44 minutes ago.","M\xfcller from Berlin earned \u20AC62,107.89 19 minutes ago.","Schmidt from Hamburg earned \u20AC73,204.17 27 minutes ago.","Schneider from Munich earned \u20AC61,306.52 36 minutes ago.","Fischer from Frankfurt earned \u20AC68,903.27 48 minutes ago.","Weber from Cologne earned \u20AC76,509.64 53 minutes ago.","Meyer from Stuttgart earned \u20AC70,805.71 29 minutes ago.","Wagner from Dusseldorf earned \u20AC66,409.47 34 minutes ago.","Becker from Leipzig earned \u20AC79,708.55 58 minutes ago.","Schulz from Berlin earned \u20AC58,709.33 50 minutes ago.","Hoffmann from Hamburg earned \u20AC64,205.89 52 minutes ago.","Sch\xe4fer from Munich earned \u20AC71,308.72 59 minutes ago.","Koch from Frankfurt earned \u20AC75,604.37 24 minutes ago.","Bauer from Cologne earned \u20AC68,504.92 32 minutes ago.","Richter from Stuttgart earned \u20AC76,209.85 43 minutes ago.","Klein from Dusseldorf earned \u20AC62,906.12 51 minutes ago.","Wolf from Leipzig earned \u20AC69,707.93 56 minutes ago.","Schr\xf6der from Berlin earned \u20AC77,807.91 13 minutes ago.","Neumann from Hamburg earned \u20AC60,508.21 23 minutes ago.","Schwarz from Munich earned \u20AC79,805.44 30 minutes ago.","Zimmermann from Frankfurt earned \u20AC67,703.92 46 minutes ago.","Braun from Cologne earned \u20AC75,309.84 54 minutes ago.","Kr\xfcger from Berlin earned \u20AC62,105.42 17 minutes ago.","Hofmann from Hamburg earned \u20AC71,306.76 37 minutes ago.","Hartmann from Munich earned \u20AC78,403.91 49 minutes ago.","Lange from Frankfurt earned \u20AC64,904.26 57 minutes ago.","Patel from London earned \xa363,709.84 12 minutes ago.","Rossi from Paris earned \u20AC77,808.93 20 minutes ago.","Martens from Milan earned \u20AC69,605.84 25 minutes ago.","Jansen from Madrid earned \xa356,904.73 39 minutes ago.","Kova\u010D from Brussels earned \u20AC65,406.22 48 minutes ago.","Nov\xe1k from Barcelona earned \xa372,608.46 16 minutes ago.","Nielsen from Amsterdam earned \u20AC59,705.44 28 minutes ago.","O\'Connor from Vienna earned \xa367,903.92 35 minutes ago.","Antonopoulos from Rome earned \u20AC76,309.81 41 minutes ago.","Ivanov from Berlin earned \xa378,506.82 50 minutes ago.","Papadopoulos from Frankfurt earned \u20AC62,107.93 55 minutes ago.","Andersen from Athens earned \xa368,402.91 9 minutes ago.","Nielsen from Lisbon earned \u20AC79,708.55 18 minutes ago.","Olsen from Madrid earned \xa361,508.92 27 minutes ago.","Johansson from Brussels earned \u20AC70,805.73 32 minutes ago.","Eriksson from London earned \xa375,603.74 43 minutes ago.","Larsson from Paris earned \u20AC64,204.82 58 minutes ago.","Jankovi\u0107 from Milan earned \xa369,904.23 14 minutes ago.","Kowalczyk from Berlin earned \u20AC77,808.63 33 minutes ago.","Nowak from Lisbon earned \xa362,904.32 47 minutes ago.","Al-Mansouri from Riyadh earned $67,209.47 26 minutes ago.","Zinnab from Cairo earned $78,409.33 34 minutes ago.","Al-Hajjar from Dubai earned $62,108.91 45 minutes ago.","Al-Ahmadi from Mecca earned $75,603.27 53 minutes ago.","Yusuf from Baghdad earned $79,804.27 59 minutes ago.","Al-Khatib from Damascus earned $68,103.42 21 minutes ago.","Al-Masri from Amman earned $74,609.48 38 minutes ago.","Al-Qasimi from Abu Dhabi earned $60,504.88 44 minutes ago.","Mustafa from Beirut earned $79,408.36 51 minutes ago.","Ibrahim from Muscat earned $57,309.82 56 minutes ago","Dakota from New York deposited $12,607.96 49 minutes ago.","Cheyenne from Los Angeles deposited $9,902.28 12 minutes ago.","Sequoia from Chicago deposited $14,805.23 37 minutes ago.","Winona from Houston deposited $8,308.14 25 minutes ago.","Tahoma from Philadelphia deposited $10,609.72 18 minutes ago.","Shoshone from Phoenix deposited $11,609.17 21 minutes ago.","Kiona from San Antonio deposited $14,506.92 33 minutes ago.","Navajo from San Diego deposited $6,502.61 45 minutes ago.","Shawnee from Dallas deposited $18,205.07 28 minutes ago.","Tecumseh from San Jose deposited $15,406.51 40 minutes ago.","Greta from Berlin deposited \u20AC11,604.57 42 minutes ago.","Friedrich from Munich deposited \u20AC14,102.75 15 minutes ago.","Lieselotte from Hamburg deposited \u20AC8,509.61 26 minutes ago.","Dieter from Frankfurt deposited \u20AC19,001.04 31 minutes ago.","Anneliese from Cologne deposited \u20AC10,007.39 39 minutes ago.","Wolfgang from Stuttgart deposited \u20AC7,601.93 47 minutes ago.","Brunhilde from Leipzig deposited \u20AC7,002.16 4 minutes ago.","Heinrich from Dusseldorf deposited \u20AC9,903.68 10 minutes ago.","Liesel from Berlin deposited \u20AC17,501.42 22 minutes ago.","Gunther from Hamburg deposited \u20AC10,604.92 35 minutes ago.","Alessio from London deposited \xa39,002.36 55 minutes ago.","Ingrid from Paris deposited \u20AC10,408.84 19 minutes ago.","Mateo from Rome deposited \u20AC8,503.89 27 minutes ago.","Eszter from Budapest deposited \xa39,207.18 20 minutes ago.","Lars from Stockholm deposited \u20AC13,509.55 38 minutes ago.","Liora from Tel Aviv deposited \xa37,002.21 44 minutes ago.","Costin from Bucharest deposited \u20AC14,005.37 34 minutes ago.","Ma\xeblys from Brussels deposited \xa312,702.92 24 minutes ago.","Luka from Amsterdam deposited \u20AC12,502.06 32 minutes ago.","Vasilis from Athens deposited \xa315,003.21 43 minutes ago.","Aisha from Riyadh deposited $8,002.58 58 minutes ago.","Omar from Dubai deposited $9,503.78 50 minutes ago.","Fatima from Mecca deposited $17,307.14 52 minutes ago.","Amir from Cairo deposited $12,206.45 59 minutes ago.","Layla from Baghdad deposited $19,302.83 24 minutes ago.","Malik from Damascus deposited $10,207.88 46 minutes ago.","Yasmin from Amman deposited $9,708.68 54 minutes ago.","Jamal from Beirut deposited $10,405.77 17 minutes ago.","Nour from Muscat deposited $16,903.95 37 minutes ago.","Zainab from Riyadh deposited $5,802.44 57 minutes ago."]');

},{}],"a7nDL":[function(require,module,exports) {
module.exports = require("b0b3866640a5d388").getBundleURL("adbhH") + "chart-icon.c0ab6296.png" + "?" + Date.now();

},{"b0b3866640a5d388":"lgJ39"}]},["3qo0Z","jmsaX"], "jmsaX", "parcelRequire096c")

//# sourceMappingURL=index.462a9b78.js.map
