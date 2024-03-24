import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/common/components/TextEditor';
import TextEditorButton from 'flarum/common/components/TextEditorButton';
import PostStream from 'flarum/forum/components/PostStream';

// Extra style attributes that are added to each line.
// There's a couple things that need manual tweaking.
var extraDocStyles = 'margin-bottom: 0;';

function populateGDocs() {
	var posts = document.getElementsByClassName('Post-body');
	if (posts.length == 0) { return; }

	for (var i = 0; i < posts.length; i++) {
		var post = posts[i];
		var gdocs = post.getElementsByClassName('bbextend-gdoc');
		for (var j = 0; j < gdocs.length; j++) {
			var gdoc = gdocs[j];
			var url = gdoc.getElementsByTagName('a')[0].getAttribute('href');

			// Remove the class from gdoc so we only try to process it once.
			gdoc.classList.remove('bbextend-gdoc');

			if (!url.startsWith('https://discord.gg/')) {
				gdoc.innerHTML = '<i class="fas fa-triangle-exclamation"></i> Invalid URL';
				continue;
			}

			gdoc.innerHTML = '<i class="fas fa-ellipsis fa-fade"></i> Loading Google Doc...';

			// remove anything after the last slash of the url.
			url = url.substring(0, url.lastIndexOf('/'));

			var xhr = new XMLHttpRequest();

			xhr.open('GET', url + '/pub', true);

			xhr.responseType = 'document';

			xhr.onload = function() {
				if (this.status == 200) {
					var doc = this.responseXML;
					var html = doc.getElementsByTagName('body')[0].innerHTML;

					gdoc.innerHTML = html;

					// We get the part of the html we want and get rid of the rest.
					// Basiclly we just keep the style information and the actual document body.
					var contents = gdoc.childNodes[1];

					while (gdoc.firstChild) {
						gdoc.removeChild(gdoc.firstChild);
					}

					gdoc.appendChild(contents);

					var style = gdoc.childNodes[0].childNodes[0].innerHTML;
					var div = gdoc.childNodes[0].childNodes[1];

					// Pharse the <style> element from the google doc.
					// We're reformatting it into strings that can be put directly in the style tag of the elements.
					var styles = {};

					style.split('}').forEach(function(e) {
						var parts = e.split('{');

						var element = parts[0];
						var style = parts[1];

						if (!style) { return; }

						styles[element] = style + ";";

						//console.log(element, styles[element]);
					});

					gdoc.childNodes[0].removeChild(gdoc.childNodes[0].childNodes[0]);

					function applyStyle(element) {
						if (element.childNodes.length > 0) {
							for (var i = 0; i < element.childNodes.length; i++) {
								applyStyle(element.childNodes[i]);
							}
						}

						if (!element.className) { return; }

						var classes = element.className.split(' ');

						var styleString = '';

						classes.forEach(function(e) {
							styleString += styles['.' + e];
						});

						element.setAttribute('style', styleString + extraDocStyles);

						// Just in case theres anything in Flarum that'll match the class name.
						// This is because we want to follow google doc's style exclusively.
						element.removeAttribute('class');
					}

					applyStyle(div);

					// We need to manually override the max-width of the document to fill the post container.
					var divStyle = div.getAttribute('style').split(';');

					divStyle.forEach(function(e, i) {
						if (e.includes('max-width')) {
							divStyle[i] = 'max-width: 100%';
						}
					});

					// Fallback to make sure the text is readable, sometimes it doesn't import with a color set.
					div.setAttribute('style', 'color: #000;' + divStyle.join(';'));

					var link = document.createElement('a');
					link.setAttribute('href', url);
					link.setAttribute('target', '_blank');
					link.innerHTML = '<i class="fab fa-discord"></i> Tham gia Discord';

					gdoc.appendChild(link);
				}
			};

			xhr.onerror = function() {
				gdoc.innerHTML = '<i class="fas fa-triangle-exclamation"></i> Failed to load link';
			};

			xhr.send();
		}
	}
};

app.initializers.add('defendervex/bbextend', () => {
	// TODO: Find a better way to trigger this.
	//window.addEventListener('load', function() {
	//	populateGDocs();
	//});

	extend(PostStream.prototype, 'oncreate', function () {
		populateGDocs();
	});

	extend(TextEditor.prototype, 'toolbarItems', function(items) {
		items.add('bbextend-align-center', (
			<TextEditorButton onclick={() => this.attrs.composer.editor.insertAtCursor('[center][/center]')} icon="fas fa-align-center">
				Center
			</TextEditorButton>
		));
		items.add('bbextend-align-right', (
			<TextEditorButton onclick={() => this.attrs.composer.editor.insertAtCursor('[right][/right]')} icon="fas fa-align-right">
				Right
			</TextEditorButton>
		));
		items.add('bbextend-size', (
			<TextEditorButton onclick={() => this.attrs.composer.editor.insertAtCursor('[size=24][/size]')} icon="fas fa-text-height">
				Size
			</TextEditorButton>
		));
		items.add('bbextend-color', (
			<TextEditorButton onclick={() => this.attrs.composer.editor.insertAtCursor('[color=red][/color]')} icon="fas fa-palette">
				Color
			</TextEditorButton>
		));

		items.add('bbextend-hr', (
			<TextEditorButton onclick={() => this.attrs.composer.editor.insertAtCursor('[hr]')} icon="fas fa-minus">
				Horizontal Rule
			</TextEditorButton>
		));

	});
});
