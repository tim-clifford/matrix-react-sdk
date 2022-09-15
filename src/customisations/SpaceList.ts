/*
 * Copyright 2020 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Room } from "matrix-js-sdk/src/models/room";

// Populate this file with the details of your customisations when copying it.

/**
 * Determines if a space is visible or not. By default, all spaces are visible.
 *
 * This function should be as fast as possible to avoid slowing down the
 * client.
 * @param {Room} space The space to check the visibility of.
 * @returns {boolean} True if the space should be visible, false otherwise.
 */
function isSpaceVisible(space: Room): boolean {
    return true;
}

// This interface summarises all available customisation points and also marks
// them all as optional. This allows customisers to only define and export the
// customisations they need while still maintaining type safety.
export interface ISpaceListCustomisations {
    isSpaceVisible?: typeof isSpaceVisible;
}

// A real customisation module will define and export one or more of the
// customisation points that make up the interface above.
export const SpaceListCustomisations: ISpaceListCustomisations = {};
