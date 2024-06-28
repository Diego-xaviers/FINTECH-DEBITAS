function showPassword(element) {
    parent = element.parentElement;
    input = parent.querySelector('input');
    input.type = input.type === 'password' ? 'text' : 'password';
    input.focus();
}