import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/common/components/TextEditor';
import TextEditorButton from 'flarum/common/components/TextEditorButton';

app.initializers.add('defendervex/bbextend', () => {
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
		items.add('bbextend-google-sheet', (
			<TextEditorButton onclick={() => this.attrs.composer.editor.insertAtCursor('[gsheet][/gsheet]')} icon="fas fa-file-excel">
				Google Sheet
			</TextEditorButton>
		));
	});
});