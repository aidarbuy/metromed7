class PhotogalleryController {
	constructor () {
		'ngInject';

		this.title = 'Photo Gallery';

		var myColorScheme = {
			navigationbar: {
				background: '#f00',
				border: '1px dotted #555',
				color: '#ccc',
				colorHover: '#fff'
			},
			thumbnail: {
				background: '#f00',
				border: '0px solid #000',
				labelBackground: 'transparent',
				labelOpacity: '0.8',
				titleColor: '#fff',
				descriptionColor: '#eee'
			}
		};

		var myColorSchemeViewer = {
			background: 'rgba(1, 1, 1, 0.75)',
			imageBorder: '15px solid #f8f8f8',
			imageBoxShadow: '#888 0px 0px 20px',
			barBackground: '#222',
			barBorder: '2px solid #111',
			barColor: '#eee',
			barDescriptionColor: '#aaa'
		};

		$("#nanoGallery").nanoGallery({
			// Name of the theme.
			// Note: the corresponding css-file must also be included in the html file.
			// Possible values: 'default', 'clean', 'light' or your custom one.
			// 'default'
			theme: 'light',
			// Gallery color scheme (breadcrumb and thumbnails).
			// Possible values: 'none', 'dark','darkRed', 'darkGreen', 'darkBlue', 'darkOrange', 'light', 'lightBackground'
			// Custom color schemes are supported.
			// 'none'
			colorScheme: 'none',
			// colorScheme: 'myColorScheme',
			colorSchemeViewer: 'dark',
			// colorSchemeViewer: 'darkBlue',
			locationHash: false,
			thumbnailWidth: 'auto', thumbnailHeight: 200,
			// thumbnailWidth: 260, thumbnailHeight: 'auto',
			itemsBaseURL:'assets/images/gallery/',

			/* 
				Thumbnail mouse hover effect. The effect will also be triggered by 'tap' on touch-screen.
				Possible parameters: 'name', 'duration', 'durationBack', 'easing', 'easingBack', 'delay', 'delayBack'. (Only 'name' is mandatory.) 
				Combinations: define multiple effect names in the parameter to combine them.
				Example: thumbnailHoverEffect='borderDarker,labelAppear75'
				Please note that some effects can not be combined (for example: 'imageSlideUp' and 'imageFlipHorizontal'). And some combinations can results in weirds effects...
				Possible values:
					'none'
					'borderLighter', 'borderDarker', 
					'scale120', 'scaleLabelOverImage', 'overScale', 'overScaleOutside', 
					'slideUp', 'slideDown', 'slideRight', 'slideLeft', 
					'rotateCornerBL', 'rotateCornerBR', 
					'imageScale150', 'imageScaleIn80', 'imageScale150Outside', 
					'imageSplit4', 'imageSplitVert', 
					'imageSlideUp', 'imageSlideDown', 'imageSlideRight', 'imageSlideLeft', 
					'imageRotateCornerBL', 'imageRotateCornerBR', 'imageFlipHorizontal', 'imageFlipVertical', 
					'labelAppear', 'labelAppear75', 'labelOpacity50', 
					'descriptionAppear', 'descriptionSlideUp', 
					'labelSlideUpTop', 'labelSlideUp', 'labelSlideDown', 
					'labelSplit4', 'labelSplitVert', 'labelAppearSplit4', 'labelAppearSplitVert'
			*/
			thumbnailHoverEffect: [{name:'imageScale150', duration:400, easing:'swing' }, {name:'borderLighter'}, {name:'labelAppear75'}],

			thumbnailGutterWidth : 0,
			thumbnailGutterHeight : 0,
			thumbnailLabel: { display:true, position:'overImageOnMiddle', align:'center' },

			// itemsSelectable: true,
			// showCheckboxes: false,
			// thumbnailOpenImage: true
		});
	}
}

export default PhotogalleryController;