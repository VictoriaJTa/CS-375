/**
 *
 * Asynchronously loads the component for Graphs
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
