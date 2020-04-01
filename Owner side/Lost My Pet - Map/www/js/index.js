/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();	
			
		app.resizeMap();
		
		var map = L.map('map-canvas').setView([51.58656, 4.77596], 13);
		
		//this works, but is online:
		/*
		L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 18
		}).addTo(map);
		*/
		
		//TODO build something to fall back to web if not found.
		L.tileLayer('img/mapTiles/{z}/{x}/{y}.png', {
			maxZoom: 17
		}).addTo(map);

		var imageUrl = 'img/pet/dog1.png',
       imageBounds = [[51.58650, 4.77600], [51.58250, 4.77000]];
        L.imageOverlay(imageUrl, imageBounds).addTo(map);
		
		var imageUrl = 'img/pet/cat1.png',
       imageBounds = [[51.59650, 4.78600], [51.59250, 4.78000]];
        L.imageOverlay(imageUrl, imageBounds).addTo(map);
		
		var imageUrl = 'img/pet/horse1.png',
       imageBounds = [[51.57650, 4.79600], [51.57250, 4.79000]];
        L.imageOverlay(imageUrl, imageBounds).addTo(map);
		
		
		var popup = L.popup();

		function onMapClick(e) {
			popup
				.setLatLng(e.latlng)
				.setContent("I lost my pet here")
				.openOn(map);
		}

		map.on('click', onMapClick);
		
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
	resizeMap: function() {
		 $("#map-canvas").height(Math.max(100,$(window).height()-90));// TODO set 
	}
	
	
};

	

	$(window).resize(function() {
		app.resizeMap();
	});

