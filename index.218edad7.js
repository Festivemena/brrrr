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
})({"8wX0D":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f58b4ffc218edad7";
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

},{}],"1liXj":[function(require,module,exports) {
var _reviewsJson = require("../reviews.json");
document.addEventListener("DOMContentLoaded", (e)=>{
    // import * as reviews from "../reviews.json";
    // import reviews from "../reviews.json";\
    const images = {
        johansen: require("68556b6c65bcf75f"),
        eleonore: require("4da60523b12dbb77"),
        miguel: require("aa4fc65874cdc9d6"),
        stevie: require("65df7ac0a4976e9c"),
        donnette: require("2da1de6e593d626"),
        reggie: require("6e256ae6fafad131"),
        george: require("3468fff5ab72cdaa"),
        ludwig: require("e18386e43c2daf9a"),
        rembrandt: require("80bb3f882c241dea"),
        melessia: require("30099cc7eb91f861"),
        kareem: require("42baf2232af6a06"),
        nadine: require("1387e5c062ef8adb"),
        loretta: require("ebd4955472465049"),
        nicole: require("e7a937a40395e5f8"),
        jordan: require("291041cf43ed72e6")
    };
    e.preventDefault();
    _reviewsJson.forEach((review, index)=>{
        const divReview = document.createElement("li");
        // src="assets/${String(review.name)
        divReview.innerHTML = `
        <div class="w-full h-full">

          <div
          class="h-full overflow-hidden bg-white rounded shadow-2xl text-slate-500 shadow-slate-200"
          >
              <a href="#!" class="mb-2">
              <img
              class="rounded-full w-24 mx-auto"
              src="${images[String(review.name).split(" ")[0].toLowerCase()]}"
              alt=""
          />
          
              </a>
              <div class="px-6 flex flex-col justify-center items-center text-center rounded-bl-4xl h-full">
                  <h5 class="mb-2 text-xl font-bold leading-tight">
                      ${review.name}
                  </h5>
                  <p class="mb-2 text-sm font-medium leading-tight">
                      ${review.occupation}
                  </p>
                  <p
                      class="my-auto pt-20 pb-10 text-[0.6rem] flex justify-center items-start text-center px-12 bg-darkbg4 text-white rounded-bl-4xl leading-4 w-full h-full"
                  >
                      ${review.review}
                     </p>
                     </div>
                     </div>
                     </div>
                     `;
        //  <span> ${review.review} </span>
        //       divReview.innerHTML = `
        //     <div class="w-full h-full">
        //     <!-- Start Testimonial -->
        //     <div
        //       class="h-full overflow-hidden bg-white rounded shadow-2xl text-slate-500 shadow-slate-200"
        //     >
        //       <div class="relative p-6">
        //         <figure class="relative z-10">
        //           <blockquote class="p-6 text-lg leading-relaxed">
        //             <p>
        //               Wind-ui, is probably one of the best libraries I've
        //               came across. Good looking, easy to use and above all
        //               super accessible.
        //             </p>
        //           </blockquote>
        //           <figcaption
        //             class="flex flex-col items-start gap-2 p-6 pt-0 text-sm text-emerald-500"
        //           >
        //             <span
        //               class="flex gap-1 text-amber-400"
        //               role="img"
        //               aria-label="Rating: 3 out of 5 stars"
        //             >
        //               <span aria-hidden="true"
        //                 ><svg
        //                   xmlns="http://www.w3.org/2000/svg"
        //                   viewBox="0 0 24 24"
        //                   fill="currentColor"
        //                   class="w-6 h-6"
        //                 >
        //                   <path
        //                     fill-rule="evenodd"
        //                     d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        //                     clip-rule="evenodd"
        //                   />
        //                 </svg>
        //               </span>
        //               <span aria-hidden="true"
        //                 ><svg
        //                   xmlns="http://www.w3.org/2000/svg"
        //                   viewBox="0 0 24 24"
        //                   fill="currentColor"
        //                   class="w-6 h-6"
        //                 >
        //                   <path
        //                     fill-rule="evenodd"
        //                     d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        //                     clip-rule="evenodd"
        //                   />
        //                 </svg>
        //               </span>
        //               <span aria-hidden="true"
        //                 ><svg
        //                   xmlns="http://www.w3.org/2000/svg"
        //                   viewBox="0 0 24 24"
        //                   fill="currentColor"
        //                   class="w-6 h-6"
        //                 >
        //                   <path
        //                     fill-rule="evenodd"
        //                     d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        //                     clip-rule="evenodd"
        //                   /></svg
        //               ></span>
        //               <span aria-hidden="true"
        //                 ><svg
        //                   xmlns="http://www.w3.org/2000/svg"
        //                   viewBox="0 0 24 24"
        //                   fill="currentColor"
        //                   class="w-6 h-6"
        //                 >
        //                   <path
        //                     fill-rule="evenodd"
        //                     d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        //                     clip-rule="evenodd"
        //                   /></svg
        //               ></span>
        //               <span aria-hidden="true"
        //                 ><svg
        //                   xmlns="http://www.w3.org/2000/svg"
        //                   fill="none"
        //                   viewBox="0 0 24 24"
        //                   stroke-width="1.5"
        //                   stroke="currentColor"
        //                   class="w-6 h-6"
        //                 >
        //                   <path
        //                     stroke-linecap="round"
        //                     stroke-linejoin="round"
        //                     d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        //                   />
        //                 </svg>
        //               </span>
        //             </span>
        //             <div
        //               class="flex items-center gap-4 pt-4 text-sm text-emerald-500"
        //             >
        //               <img
        //                 src="https://i.pravatar.cc/40?img=11"
        //                 alt="user name"
        //                 title="user name"
        //                 width="48"
        //                 height="48"
        //                 class="max-w-full rounded-full shrink-0"
        //               />
        //               <div class="flex flex-col gap-1">
        //                 <span class="font-bold uppercase">Bill Gates</span>
        //                 <cite class="not-italic"
        //                   ><a href="http://www.microsoft.com"
        //                     >CEO, Microsoft</a
        //                   ></cite
        //                 >
        //               </div>
        //             </div>
        //           </figcaption>
        //         </figure>
        //         <svg
        //           aria-hidden="true"
        //           class="absolute z-0 h-16 left-6 top-6"
        //           viewBox="0 0 17 12"
        //           fill="none"
        //           xmlns="http://www.w3.org/2000/svg"
        //         >
        //           <path
        //             d="M2.79187 3.83333C2.66179 3.83333 2.53696 3.85316 2.41271 3.87125C2.45296 3.73591 2.49437 3.59825 2.56087 3.47458C2.62737 3.29491 2.73121 3.13916 2.83446 2.98225C2.92079 2.8125 3.07304 2.69758 3.18504 2.55233C3.30229 2.41116 3.46212 2.31725 3.58871 2.2C3.71296 2.0775 3.87571 2.01625 4.00521 1.92991C4.14054 1.85233 4.25837 1.76658 4.38437 1.72575L4.69879 1.59625L4.97529 1.48133L4.69237 0.35083L4.34412 0.43483C4.23271 0.46283 4.09679 0.495496 3.94221 0.53458C3.78412 0.563746 3.61554 0.643663 3.42771 0.71658C3.24221 0.799413 3.02754 0.855413 2.82804 0.988413C2.62737 1.11558 2.39579 1.22175 2.19162 1.39208C1.99387 1.56766 1.75529 1.71991 1.57912 1.94333C1.38662 2.15216 1.19646 2.3715 1.04887 2.62116C0.877957 2.85916 0.761873 3.1205 0.639373 3.37891C0.52854 3.63733 0.43929 3.90158 0.366373 4.15825C0.228123 4.67275 0.16629 5.16158 0.142373 5.57983C0.12254 5.99866 0.134207 6.34691 0.158707 6.59891C0.167457 6.71791 0.18379 6.83341 0.195457 6.91333L0.21004 7.01133L0.225207 7.00783C0.328959 7.49248 0.567801 7.93786 0.914102 8.29243C1.2604 8.64701 1.70001 8.89631 2.18208 9.01148C2.66415 9.12665 3.16897 9.10299 3.63815 8.94323C4.10733 8.78348 4.52169 8.49416 4.83331 8.10874C5.14493 7.72333 5.34107 7.25757 5.39903 6.76534C5.457 6.27311 5.37443 5.77452 5.16087 5.32726C4.94731 4.88 4.61149 4.50233 4.19225 4.23796C3.77302 3.97358 3.28751 3.8333 2.79187 3.83333V3.83333ZM9.20854 3.83333C9.07846 3.83333 8.95362 3.85316 8.82937 3.87125C8.86962 3.73591 8.91104 3.59825 8.97754 3.47458C9.04404 3.29491 9.14787 3.13916 9.25112 2.98225C9.33746 2.8125 9.48971 2.69758 9.60171 2.55233C9.71896 2.41116 9.87879 2.31725 10.0054 2.2C10.1296 2.0775 10.2924 2.01625 10.4219 1.92991C10.5572 1.85233 10.675 1.76658 10.801 1.72575L11.1155 1.59625L11.392 1.48133L11.109 0.35083L10.7608 0.43483C10.6494 0.46283 10.5135 0.495496 10.3589 0.53458C10.2008 0.563746 10.0322 0.643663 9.84437 0.71658C9.65946 0.799997 9.44421 0.855413 9.24471 0.988997C9.04404 1.11616 8.81246 1.22233 8.60829 1.39266C8.41054 1.56825 8.17196 1.7205 7.99579 1.94333C7.80329 2.15216 7.61312 2.3715 7.46554 2.62116C7.29462 2.85916 7.17854 3.1205 7.05604 3.37891C6.94521 3.63733 6.85596 3.90158 6.78304 4.15825C6.64479 4.67275 6.58296 5.16158 6.55904 5.57983C6.53921 5.99866 6.55087 6.34691 6.57537 6.59891C6.58412 6.71791 6.60046 6.83341 6.61212 6.91333L6.62671 7.01133L6.64187 7.00783C6.74563 7.49248 6.98447 7.93786 7.33077 8.29243C7.67707 8.64701 8.11668 8.89631 8.59875 9.01148C9.08081 9.12665 9.58563 9.10299 10.0548 8.94323C10.524 8.78348 10.9384 8.49416 11.25 8.10874C11.5616 7.72333 11.7577 7.25757 11.8157 6.76534C11.8737 6.27311 11.7911 5.77452 11.5775 5.32726C11.364 4.88 11.0282 4.50233 10.6089 4.23796C10.1897 3.97358 9.70417 3.8333 9.20854 3.83333V3.83333Z"
        //             class="fill-emerald-50"
        //           />
        //         </svg>
        //       </div>
        //     </div>
        //     <!-- End Testimonial -->
        //   </div>
        //     `;
        const sliderBtn = document.createElement("button");
        sliderBtn.className = "w-3 h-3 rounded-full";
        sliderBtn.setAttribute("type", "button");
        sliderBtn.setAttribute("aria-current", true);
        sliderBtn.setAttribute("aria-label", `Slide ${index + 1}`);
        sliderBtn.setAttribute("data-carousel-slide-to", index);
        document.querySelector("#ul-reviews").appendChild(divReview);
    //   document.querySelector("#review-con").appendChild(divReview);
    //   document.querySelector("#slider-indicators").appendChild(sliderBtn);
    });
});

},{"../reviews.json":"1XNN4","68556b6c65bcf75f":"a5Cwv","4da60523b12dbb77":"hpWBb","aa4fc65874cdc9d6":"igmzO","65df7ac0a4976e9c":"4c6tG","2da1de6e593d626":"c6PPN","6e256ae6fafad131":"2JvPn","3468fff5ab72cdaa":"iV10C","e18386e43c2daf9a":"67uPD","80bb3f882c241dea":"9VnNy","30099cc7eb91f861":"A0icl","42baf2232af6a06":"di89V","1387e5c062ef8adb":"dQ8oU","ebd4955472465049":"1qVGd","e7a937a40395e5f8":"3pykP","291041cf43ed72e6":"8Tbo8"}],"1XNN4":[function(require,module,exports) {
module.exports = JSON.parse('[{"name":"Johansen Raphael","occupation":"Realtor","review":"I am absolutely thrilled with the results I\'ve achieved by investing in PDA. Their team\'s expertise and dedication have propelled my capital gains to new heights. If you\'re serious about maximizing your digital investment potential, look no further than PDA."},{"name":"Eleonore Ehrhard","occupation":"Finanzanalystin","review":"Es ist eine unglaubliche Erfahrung, Geld auf Ihr Konto einzuzahlen und mit Affiliate-Marketing bzw. dem Verkauf digitaler Produkte Geld zu verdienen, ohne mich zu stressen oder mich blicken zu lassen \u2013 und das alles dank des Premium Digital Affiliate-Programms."},{"name":"Miguel Knight","occupation":"KY-Trading Academy","review":"Premum Digital Affiliate has proven to be a game-changer in the digital investment landscape. Thanks to their innovative strategies and solid performance, I\'ve received remarkable returns on my investment. I wholeheartedly endorse PDA to anyone seeking financial growth and stability."},{"name":"Stevie Elizabeth","occupation":"Fitness & Motivation","review":"Anyone who wants to get rich through affiliate, digital, and network marketing this year should know that Premium Digital Affiliate is the best and they pay instantly upon withdrawal. Making money stress free and having time for my kids and other activities was my dream. Thanks to this platform for making that dream a reality."},{"name":"Donnette Wisdom","occupation":"Booking Agent","review":"I was initially skeptical about digital investments, but this company has completely changed my perspective. Their transparent approach and impressive track record have resulted in substantial capital interest for me. I\'m proud to recommend Premium Digital Affiliate to anyone seeking financial growth."},{"name":"Reggie Johnson","occupation":"Car Sales Enterprise","review":"As a seasoned investor, I\'ve had my fair share of successes, but none compare to the incredible gains I\'ve experienced with PDA. Their forward-thinking approach to digital investment has truly set them apart. I urge anyone seeking lucrative returns to invest in PDA without hesitation."},{"name":"George Campbell","occupation":"Image Consultant","review":"PDA has completely exceeded my expectations as a digital investment company. The impressive capital gains I\'ve experienced speak volumes about their expertise and commitment to investor success. I have referred my family and friends to participate in this program, and  they\'re all benefitting from it. Without a doubt, PDA has earned my highest recommendation."},{"name":"Ludwig Schuckmann","occupation":"Autohaus-Manager","review":"Ich investiere seit Jahren mit PDA und ihre Leistung beeindruckt mich immer wieder. Die enorme Kapitalrendite, die ich erzielt habe, spricht B\xe4nde \xfcber ihre Kompetenz und ihr Engagement f\xfcr den Erfolg der Anleger. Nach meiner Erfahrung ist PDA der Goldstandard f\xfcr digitale Investitionen."},{"name":"Rembrandt Gottschalk","occupation":"Fitnesstrainer","review":"Seitdem ich im Jahr 2022 zu PDA gekommen bin, ist mein Leben einfacher, ich kann jetzt meine Rechnungen bezahlen und mich gut um meine Familie k\xfcmmern, insbesondere um meine kleinen Zwillingst\xf6chter. Die beste Entscheidung, die ich je getroffen habe. Dank des Support-Teams leisten sie einen ph\xe4nomenalen Job."},{"name":"Melessia Lofgren","occupation":"KJCEnterprise","review":"I was speechless when I made my withdrawal of $67,500. I really couldn\'t believe my eyes. I encourage everyone here who hasn\'t funded their account yet to do so now and start earning. Thank you Premium Digital Affiliate and thank you to your support team, They\'re amazing."},{"name":"Kareem Zaynab","occupation":"Human resource manager","review":"Premium Digital Affiliate truly lives up to its reputation for delivering fast profits. I was surprised by how quickly my initial capital grew, thanks to their strategic approach and expert guidance. What impressed me even more was the smooth and hassle-free experience I had with their services. Whether it was navigating their platform or accessing investment insights, everything was seamless and user-friendly."},{"name":"Nadine Heinemann","occupation":"Art Enthusiast","review":"Working with Premium Digital Affiliate is one of the best decisions I\'ve ever made. Not only did I see profits start rolling in faster than I ever imagined, but I also received top-notch support and service every step of the way. PDA\'s 24-hour support service is phenomenal, I always had access to assistance whenever I needed it. Their commitment to delivering profits and exceptional service sets them apart from the rest."},{"name":"Loretta Johnston","occupation":"Interior Designer","review":"The speed at which I earned profits with Premium Digital Affiliate was truly remarkable. Within a short timeframe, I saw my capital grow exponentially, exceeding my initial expectations. From account setup to fund withdrawals, everything is sophisticated and efficient, allowing me to deposit and withdraw funds easily."},{"name":"Nicole Mosseri","occupation":"Landwirtin","review":"In Premium Digital Affiliate zu investieren ist eine unglaubliche Erfahrung, von der Einzahlung des Kapitals bis zur Auszahlung des Gewinns. Die Rate, mit der ich Gewinne machte, \xfcbertraf meine Erwartungen, dank ihres strategischen Ansatzes und ihrer innovativen Anlagel\xf6sungen. M\xfchelos Geld zu verdienen, ohne stundenlang zu arbeiten, ist wirklich gro\xdfartig. Ich habe mir dank Premium Digital Affiliate von dem Gewinn, den ich gemacht habe, ein neues Auto gekauft."},{"name":"Jordan Mohr","occupation":"Skydiver","review":"PDA is a reliable and profitable digital marketing investment program. The worthwhile ROI I\'ve experienced in a remarkably short period speaks about their commitment to investor success. It is user-friendly, making the investment process enjoyable, thanks to my account manager and the support team."}]');

},{}],"a5Cwv":[function(require,module,exports) {
module.exports = require("4758db98a2d27347").getBundleURL("l51BM") + "johansen.29b943a5.png" + "?" + Date.now();

},{"4758db98a2d27347":"lgJ39"}],"hpWBb":[function(require,module,exports) {
module.exports = require("fcfe18a80470a2f9").getBundleURL("l51BM") + "eleonore.ac2235ca.png" + "?" + Date.now();

},{"fcfe18a80470a2f9":"lgJ39"}],"igmzO":[function(require,module,exports) {
module.exports = require("b0c07fc8cd1856ad").getBundleURL("l51BM") + "miguel.f0eb3a4c.png" + "?" + Date.now();

},{"b0c07fc8cd1856ad":"lgJ39"}],"4c6tG":[function(require,module,exports) {
module.exports = require("5ca010a0ca8368a2").getBundleURL("l51BM") + "stevie.7a86aa5d.png" + "?" + Date.now();

},{"5ca010a0ca8368a2":"lgJ39"}],"c6PPN":[function(require,module,exports) {
module.exports = require("9531ab7f562b4d27").getBundleURL("l51BM") + "donnette.25219d94.png" + "?" + Date.now();

},{"9531ab7f562b4d27":"lgJ39"}],"2JvPn":[function(require,module,exports) {
module.exports = require("bbe9e95faa334b9a").getBundleURL("l51BM") + "reggie.a8b4885e.png" + "?" + Date.now();

},{"bbe9e95faa334b9a":"lgJ39"}],"iV10C":[function(require,module,exports) {
module.exports = require("bbfc91355364945c").getBundleURL("l51BM") + "george.c410dbb5.png" + "?" + Date.now();

},{"bbfc91355364945c":"lgJ39"}],"67uPD":[function(require,module,exports) {
module.exports = require("cf905acd4bc67d84").getBundleURL("l51BM") + "ludwig.cbb13638.png" + "?" + Date.now();

},{"cf905acd4bc67d84":"lgJ39"}],"9VnNy":[function(require,module,exports) {
module.exports = require("2794e2de3e64b96e").getBundleURL("l51BM") + "rembrandt.59c6a677.png" + "?" + Date.now();

},{"2794e2de3e64b96e":"lgJ39"}],"A0icl":[function(require,module,exports) {
module.exports = require("6eb2c4ea1ee52908").getBundleURL("l51BM") + "melessia.ffc3bdd6.png" + "?" + Date.now();

},{"6eb2c4ea1ee52908":"lgJ39"}],"di89V":[function(require,module,exports) {
module.exports = require("c6ea878f77096ec4").getBundleURL("l51BM") + "kareem.c1abb1bf.png" + "?" + Date.now();

},{"c6ea878f77096ec4":"lgJ39"}],"dQ8oU":[function(require,module,exports) {
module.exports = require("6183f9026e31d532").getBundleURL("l51BM") + "nadine.56f2c2dc.png" + "?" + Date.now();

},{"6183f9026e31d532":"lgJ39"}],"1qVGd":[function(require,module,exports) {
module.exports = require("66a89d581ae69a67").getBundleURL("l51BM") + "loretta.9480733f.png" + "?" + Date.now();

},{"66a89d581ae69a67":"lgJ39"}],"3pykP":[function(require,module,exports) {
module.exports = require("88c8281d126ef8e9").getBundleURL("l51BM") + "nicole.73480c18.png" + "?" + Date.now();

},{"88c8281d126ef8e9":"lgJ39"}],"8Tbo8":[function(require,module,exports) {
module.exports = require("4b8de9124e5c12d4").getBundleURL("l51BM") + "jordan.bf249f0d.png" + "?" + Date.now();

},{"4b8de9124e5c12d4":"lgJ39"}]},["8wX0D","1liXj"], "1liXj", "parcelRequire096c")

//# sourceMappingURL=index.218edad7.js.map
