'use strict';

var sliders = [{
	// headers: [ "We Care About", "Every Client" ]
	headers: [ "We are passionate", "about caring for your health" ]
	,text: [ "A wide spectrum of quality medical services and treatment"
					," for all age groups." ]
	,images: [{ 
		title: "We Care About Every Client"
		,alt: "A beautiful blonde miss in front of three medics."
		,src: 'images/template/image-1.jpg'
	},{
		title: "We Care About Every Client"
		,alt: "A beautiful blonde miss in front of three medics."
		,src: 'images/template/caption-2.png'
	}]
},{
	headers: [ "Full Spectrum", "Treatment" ]
	,text: [ "Medical Counseling"
					,"Cardiac Clinic"
					,"Pediatric Clinic"
					,"Gynecological Clinic"
					,"Laboratory Analysis"
					,"Diagnosis Clinic" ]
	,images: [{ 
		title: "Full Spectrum Treatment"
		,alt: "A blonde miss drawing a blue heart in front of three medics showing the like finger figure."
		,src: 'images/template/image-2.jpg'
	},{
		title: ""
		,alt: "a tick"
		,src: 'images/template/tick-2.png'
	}]
},{
	headers: [ "Playful", "Pediatric", "Care" ]
	,text: [ "When medical treatment is fun..." ]
	,images: [{ 
		title: "Playful Pediatric Care"
		,alt: "A cute blonde boy looking up and touching his chin with his index finger."
		,src: 'images/template/image-3.jpg'
	},{
		title: ""
		,alt: "white image"
		,src: 'images/template/home-3-150x150.png'
	}]
}];

app.value('sliders', sliders);
