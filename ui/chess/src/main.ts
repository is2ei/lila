import piotr from './piotr';

export const initialFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

export function fixCrazySan(san: string): string {
  return san[0] === 'P' ? san.slice(1) : san;
}

export function decomposeUci(uci: string): [string, string, string] {
  return [uci.slice(0, 2), uci.slice(2, 4), uci.slice(4, 5)];
}

export function renderEval(e: number): string {
  e = Math.max(Math.min(Math.round(e / 10) / 10, 99), -99);
  return (e > 0 ? '+' : '') + e;
}

export interface Dests {
  [square: string]: Array<string>;
}

export function readDests(lines?: string): Dests | null {
  if (typeof lines === 'undefined') return null;
  var dests: Dests = {};
  if (lines) lines.split(' ').forEach(function(line) {
    dests[piotr[line[0]]] = line.split('').slice(1).map(function(c) {
      return piotr[c];
    });
  });
  return dests;
}

export function readDrops(line?: string | null): string[] | null {
  if (typeof line === 'undefined' || line === null) return null;
  return line.match(/.{2}/g) || [];
}

export const roleToSan = {
  pawn: 'P',
  knight: 'N',
  bishop: 'B',
  rook: 'R',
  queen: 'Q',
  king: 'K'
};

export const sanToRole = {
  P: 'pawn',
  N: 'knight',
  B: 'bishop',
  R: 'rook',
  Q: 'queen',
  K: 'king'
};

export { piotr };
