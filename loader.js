/*
 * Quick loader
 * author: Ignacio Cartes W.
 */

(function(window) {
	'use strict';
	
	// define module to be exported
	var module = {};
	
	// private variables
	var isRunning = false;
	
	// create div elements to house the loader
	var container = document.createElement('div'),
	loader = document.createElement('div');
	
	/*
	 * public start()
	 *
	 * Starts the loader
	 */
	module.start = function() {
		// end inmediately if loader is active already
		if (isRunning) return null;
		
		document.body.appendChild(container);
    	loader.style.animation = "spin 2s linear infinite";
		
		isRunning = true;
		
	};
	
	/*
	 * public stop()
	 *
	 * Stops the loader
	 */
	module.stop = function() {
		// end inmediately if loader is not running
		if (!isRunning) return null;
		
		document.body.removeChild(container);
    	loader.style.animation = "";
		
		isRunning = false;
		
	};
	
	/*
	 * private init()
	 *
	 * Creates the loader
	 */
	function init() {
		
		// set css properties for container and loader
		container.style.position = "fixed";
		container.style.padding = "0";
		container.style.margin = "0";
		container.style.top = "0";
		container.style.left = "0";
		container.style.width = "100%";
		container.style.height = "100%";
		container.style.background = "rgba(255,255,255,0.5)";
		
		loader.style.border = "16px solid #f3f3f3";
		loader.style.borderTop = "16px solid #3498db";
    	loader.style.borderRadius = "50%";
		loader.style.display = "inline-block";
    	loader.style.width = "120px";
    	loader.style.height = "120px";
    	loader.style.margin = "auto";
		loader.style.position = "absolute";
		loader.style.left = "50%";
		loader.style.top = "50%";
    	loader.style.transform = "translate(-50%, -50%)";
		
		// put loader inside container
		container.appendChild(loader);
		
		// inject css for keyframes rotation
		var style = document.createElement('style');
		style.type = 'text/css';
		var keyFrames = "@keyframes spin { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); }}";
		style.innerHTML = keyFrames;
		document.getElementsByTagName('head')[0].appendChild(style);
	}
	
	// Create the loader
	init();
	
	// If object already exists in global window, throw an exception
	if (window._LOADER) {
		console.error("object _LOADER already exists in window");
	} else {
		window._LOADER = module;
	}
	
}(window));