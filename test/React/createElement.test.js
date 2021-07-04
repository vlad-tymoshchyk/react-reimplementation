describe('React', () => {
  it('`createElement` works correctly', () => {
    expect(<div class="test-class">Test text</div>).toEqual({
      type: 'div',
      props: { class: 'test-class' },
      children: ['Test text'],
    });
  });
});
