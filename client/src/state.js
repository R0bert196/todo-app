import { atom } from "jotai";

const tasks = atom([]);
const direction = atom("desc");


export const appState = { tasks, direction };