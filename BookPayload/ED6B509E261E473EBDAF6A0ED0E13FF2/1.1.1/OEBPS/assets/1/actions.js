var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var orientationDevice = getOrientation(PubCoder.isAndroidReader);
var aigX = 0, aigY = 0;
var obj70_animation_count = 0;
/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj70_onTouchUp_activeActionGroupIndex = -1;
var obj70_onTouchUp_runningActionsCount = 0;
var obj70_onTouchUp_loopCount = 0;
var obj7_onTouchUp_activeActionGroupIndex = -1;
var obj7_onTouchUp_runningActionsCount = 0;
var obj7_onTouchUp_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
$(window).load(function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
initAnimation_70();
function initAnimation_70()
{
        var targetObjectId = "#obj70";
        var widthSCAnimationObject = 493;
        var heightSCAnimationObject = 554;
		var framesPerSecond = 10;
		var howManyLoops = 1;
		var backToFirstFrame = true;
        var isAnimationInfinite = false;
        window.audio_animation_obj70 = $("#")[0];
        window.hasAudioTrack_obj70 = false
 initAnimation(targetObjectId,widthSCAnimationObject,heightSCAnimationObject,framesPerSecond,window.obj70_animation_count,isAnimationInfinite,howManyLoops,backToFirstFrame);
window.api_animate_obj70 = $(targetObjectId).spritespin("api");
}

	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj70_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70_onTouchUp_activeActionGroupIndex = -1;
		$("#obj70").trigger("obj70_onTouchUp_ended");
		
		return;
	}
	window.obj70_onTouchUp_activeActionGroupIndex = 0;
	


//	action: playAnimation 
//	target: obj70 
playAnimation_73();
function playAnimation_73() {
	var targetObjectId = "#obj70";
	var targetObject = $(targetObjectId)[0];
	window.obj70_onTouchUp_runningActionsCount = obj70_onTouchUp_runningActionsCount + 1;
	var isAnimationInfinite = false;
	if (isAnimationInfinite) {
		window.obj70_onTouchUp_runningActionsCount = window.obj70_onTouchUp_runningActionsCount - 1;
if (window.obj70_onTouchUp_runningActionsCount == 0) {
	obj70_onTouchUp_actionGroup1();
}
		if ($(targetObjectId).hasClass("playing")) {
			return;
		}
	}
	if (window.hasAudioTrack_obj70 && !$(targetObjectId).hasClass("playing")) {
		var myAudio = window.audio_animation_obj70;
		myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
		myAudio.play();
	}
    $(targetObjectId).addClass("playing");
	setTimeout(function() {
	    api_animate_obj70.startAnimation();
	}, 1);
	if (!isAnimationInfinite) {
		$("#obj70").one("obj70_animation_ended",function(event) {
		    window.obj70_onTouchUp_runningActionsCount = window.obj70_onTouchUp_runningActionsCount - 1;
if (window.obj70_onTouchUp_runningActionsCount == 0) {
	obj70_onTouchUp_actionGroup1();
}
		});
	}
 }


















};
obj70_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70_onTouchUp_activeActionGroupIndex = -1;
		$("#obj70").trigger("obj70_onTouchUp_ended");
		
		return;
	}
	window.obj70_onTouchUp_activeActionGroupIndex = 1;
	




















};
obj7_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj7_onTouchUp_activeActionGroupIndex = -1;
		$("#obj7").trigger("obj7_onTouchUp_ended");
		
		return;
	}
	window.obj7_onTouchUp_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_110();
function playAudioFile_110() {
	window.obj7_onTouchUp_runningActionsCount = obj7_onTouchUp_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile110")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj7_onTouchUp_runningActionsCount = window.obj7_onTouchUp_runningActionsCount - 1;
if (window.obj7_onTouchUp_runningActionsCount == 0) {
	obj7_onTouchUp_actionGroup1();
}
		}, false);
	} else {
		window.obj7_onTouchUp_runningActionsCount = window.obj7_onTouchUp_runningActionsCount - 1;
if (window.obj7_onTouchUp_runningActionsCount == 0) {
	obj7_onTouchUp_actionGroup1();
}
	}
	
}














};
obj7_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj7_onTouchUp_activeActionGroupIndex = -1;
		$("#obj7").trigger("obj7_onTouchUp_ended");
		
		return;
	}
	window.obj7_onTouchUp_activeActionGroupIndex = 1;
	




















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



/*
 *
 *   obj70: Event Touch Up
 *
 */
$("#obj70").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj70").unbind("obj70_onTouchDown_ended", startActionList);
	    if (window.obj70_onTouchUp_activeActionGroupIndex != -1) return;
var obj70_onTouchUp_runningActionsCount = 0;
var obj70_onTouchUp_loopCount = 0;
obj70_onTouchUp_actionGroup0();
	};
	if ((window['obj70_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj70_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj70").bind("obj70_onTouchDown_ended", startActionList);
	}
});






/*
 *
 *   obj7: Event Touch Up
 *
 */
$("#obj7").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj7").unbind("obj7_onTouchDown_ended", startActionList);
	    if (window.obj7_onTouchUp_activeActionGroupIndex != -1) return;
var obj7_onTouchUp_runningActionsCount = 0;
var obj7_onTouchUp_loopCount = 0;
obj7_onTouchUp_actionGroup0();
	};
	if ((window['obj7_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj7_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj7").bind("obj7_onTouchDown_ended", startActionList);
	}
});



		
		/*
		 *
	 	 *   Trigger onShow events for objects already shown on stage
	 	 *
	 	 */
	 	setTimeout(function() {
		
$("#obj70").trigger('SCEventShow');
$("#obj7").trigger('SCEventShow');
		$(window).trigger('SCEventPageReady');
		}, 200);
	 }
})