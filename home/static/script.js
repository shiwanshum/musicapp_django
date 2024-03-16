var audio = {
    init: function() {
        var $that = this;
        $(function() {
            $that.components.media();
        });
    },
    components: {
        media: function(target) {
            // Default to 'body' if target is undefined
            var $target = (target !== undefined) ? target : 'body';
            var media = $('audio.fc-media', $target);
            if (media.length) {
                media.mediaelementplayer({
                    audioHeight: 40,
                    features: ['playpause', 'current', 'duration', 'progress', 'volume', 'tracks', 'fullscreen'],
                    alwaysShowControls: true,
                    timeAndDurationSeparator: '<span></span>',
                    iPadUseNativeControls: true,
                    iPhoneUseNativeControls: true,
                    AndroidUseNativeControls: true
                });
            } else {
                console.error('No audio.fc-media elements found in the target:', $target);
            }
        },
    },
};

audio.init();
