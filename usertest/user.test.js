const { addUser, getUser, getActiveUsersCount } = require('./user');

test('Adicionar um usuário', () => {
    addUser({ id: 1, name: 'Alice', active: true });
    expect(getUser(1).name).toBe('Alice');
});

test('Recuperar informações do usuário', () => {
    addUser({ id: 2, name: 'Bob', active: false });
    expect(getUser(2).name).toBe('Bob');
});

test('Atualizar o total de usuários ativos', () => {
    addUser({ id: 3, name: 'Carol', active: true });
    expect(getActiveUsersCount()).toBe(2);
});
