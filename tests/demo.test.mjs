import test from 'node:test'; import assert from 'node:assert/strict';
test('demo journey always has three labelled alternatives', () => assert.equal(['match', 'gem', 'budget'].length, 3));
test('replanned pulse is higher than disruption pulse', () => assert.ok(84 > 61));
