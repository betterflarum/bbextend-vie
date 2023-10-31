import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/common/components/TextEditor';
import TextEditorButton from 'flarum/common/components/TextEditorButton';

// Extra style attributes that are added to each line.
// There's a couple things that need manual tweaking.
var extraDocStyles = 'margin-bottom: 0;';

app.initializers.add('defendervex/bbextend', () => {
	// TODO: Find a better way to trigger this.
	window.addEventListener('load', function() {
		var posts = document.getElementsByClassName('Post-body');
		for (var i = 0; i < posts.length; i++) {
			var post = posts[i];
			var gdocs = post.getElementsByClassName('bbextend-gdoc');
			for (var j = 0; j < gdocs.length; j++) {
				var gdoc = gdocs[j];
				var url = gdoc.innerHTML;

				if (!url.startsWith('https://docs.google.com/document/d/')) {
					gdoc.innerHTML = '<i class="fas fa-triangle-exclamation"></i> Invalid Google Doc URL';
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

						var contents = gdoc.childNodes[1];

						while (gdoc.firstChild) {
							gdoc.removeChild(gdoc.firstChild);
						}

						gdoc.appendChild(contents);

						var style = gdoc.childNodes[0].childNodes[0].innerHTML;
						var div = gdoc.childNodes[0].childNodes[1];

						var styles = {};

						// Pharse the <style> element from the google doc.
						// We're reformatting it into strings that can be put directly in the style tag of the elements.
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
						link.innerHTML = '<i class="fas fa-file-word"></i> View Google Doc';

						gdoc.appendChild(link);
					}
				};

				xhr.onerror = function() {
					gdoc.innerHTML = '<i class="fas fa-triangle-exclamation"></i> Failed to load Google Doc';
				};

				xhr.send();
			}
		}
	});


	extend(TextEditor.prototype, 'toolbarItems', function(items) {
		items.add('bbextend-bold', (
			<TextEditorButton onclick={() => this.attrs.composer.editor.insertAtCursor('[b][/b]')} icon="fas fa-bold">
				Bold
			</TextEditorButton>
		));
		items.add('bbextend-italic', (
			<TextEditorButton onclick={() => this.attrs.composer.editor.insertAtCursor('[i][/i]')} icon="fas fa-italic">
				Italic
			</TextEditorButton>
		));
		items.add('bbextend-underline', (
			<TextEditorButton onclick={() => this.attrs.composer.editor.insertAtCursor('[u][/u]')} icon="fas fa-underline">
				Underline
			</TextEditorButton>
		));
		items.add('bbextend-strikethrough', (
			<TextEditorButton onclick={() => this.attrs.composer.editor.insertAtCursor('[s][/s]')} icon="fas fa-strikethrough">
				Strikethrough
			</TextEditorButton>
		));

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
		items.add('bbextend-align-justify', (
			<TextEditorButton onclick={() => this.attrs.composer.editor.insertAtCursor('[justify][/justify]')} icon="fas fa-align-justify">
				Justify
			</TextEditorButton>
		));

		items.add('bbextend-indent', (
			<TextEditorButton onclick={() => this.attrs.composer.editor.insertAtCursor('[indent=20][/indent]')} icon="fas fa-indent">
				Indent
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

		items.add('bbextend-code', (
			<TextEditorButton onclick={() => this.attrs.composer.editor.insertAtCursor('[code][/code]')} icon="fas fa-code">
				Code
			</TextEditorButton>
		));
		items.add('bbextend-quote', (
			<TextEditorButton onclick={() => this.attrs.composer.editor.insertAtCursor('[quote][/quote]')} icon="fas fa-quote-left">
				Quote
			</TextEditorButton>
		));

		items.add('bbextend-hr', (
			<TextEditorButton onclick={() => this.attrs.composer.editor.insertAtCursor('[hr]')} icon="fas fa-minus">
				Horizontal Rule
			</TextEditorButton>
		));

		items.add('bbextend-google-doc', (
			<TextEditorButton onclick={() => this.attrs.composer.editor.insertAtCursor('[gdoc][/gdoc]')} icon="fas fa-file-word">
				Google Doc
			</TextEditorButton>
		));
	});
});