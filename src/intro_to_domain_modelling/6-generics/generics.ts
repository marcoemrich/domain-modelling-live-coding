{
  type Brand<K, T> = K & { __brand: T };

  type NumberOfPlayers = Brand<number, "NumberOfPlayers">;
  type Minutes = Brand<number, "Minutes">;
  type Hours = Brand<number, "Hours">;
  type Duration = Minutes | Hours;

  type Boardgame = { numberOfPlayers: NumberOfPlayers; duration: Duration };

  enum Cover {
    Leather,
    Cardboard,
  }
  type Notebooks = { NumberOfPages: number; cover: Cover };

  type Id = number;

  type Product<ProductKind> = {
    productId: Id;
    productSpecificData: ProductKind;
  };

  const myNotebook = { productId: 27, productSpecificData: { numberOfPages: 300, cover: Cover.Leather } };
  const myBoardgame = { productId: 28, productSpecificData: { numberOfPlayers: 5, duration: <Minutes>90 } };

  const productIdOf = <T>(product: Product<T>) => product.productId;

  const numberOfPlayersOf = (product: Product<Boardgame>) => product.productSpecificData.numberOfPlayers;
}
