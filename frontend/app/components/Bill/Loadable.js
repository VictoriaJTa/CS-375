/**
 *
 * Asynchronously loads the component for Bill
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
