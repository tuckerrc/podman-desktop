/**********************************************************************
 * Copyright (C) 2023 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import { existsSync } from 'node:fs';
import { rm } from 'node:fs/promises';

/**
 * Force remove recursively folder, if exists
 * @param path path to a folder to be force removed recursively
 */
export async function removeFolderIfExists(path: string) {
  if (existsSync(path)) {
    console.log(`Cleaning up folder: ${path}`);
    await rm(path, { recursive: true, force: true });
  }
}
