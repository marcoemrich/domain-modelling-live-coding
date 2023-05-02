// Tactical Design Pattern and idioms: prefer unions

// Model values explicitly

/* Don't */

const cellIsAlive: boolean = true;

/*  Do */
type livingState = "ALIVE" | "DEAD";
let cell = "ALIVE";
