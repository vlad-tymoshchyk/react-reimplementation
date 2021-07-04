describe('ReactDOM', () => {
  it('`render` method works correctly', () => {
    const root = document.createElement('div');
    ReactDOM.render(<div>some text</div>, root);
    expect(root.children.length).toBe(1);
  });
});
