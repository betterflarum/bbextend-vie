import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/common/components/TextEditor';
import TextEditorButton from 'flarum/common/components/TextEditorButton';

app.initializers.add('defendervex/bbextend', () => {
	extend(TextEditor.prototype, 'toolbarItems', function(items) {
		items.add('emoji', (
			<TextEditorButton onclick={() => this.insertAtCursor(':')} icon="far fa-smile">
				{app.translator.trans('flarum-emoji.forum.composer.emoji_tooltip')}
			</TextEditorButton>
		));
	});
});