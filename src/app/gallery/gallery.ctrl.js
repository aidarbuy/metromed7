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
			itemsBaseURL:'assets/images/gallery/',
			// thumbnailHoverEffect: 'scaleLabelOverImage,borderDarker',
			thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
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