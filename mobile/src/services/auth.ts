interface Response {
  token: string;
  user: {
    name: string;
    email: string;
    avatar: string;
    street: string;
    city: string;
    state: string;
    country: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: '1231238yuahsd78ny127y319782601293m12789yasd',
        user: {
          name: 'José da Silva',
          email: 'jose@gmail.com',
          avatar:
            'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg',
          street: 'Av.Paulista',
          city: 'São Paulo',
          state: 'São Paulo',
          country: 'Brasil',
        },
      });
    }, 1300);
  });
}
