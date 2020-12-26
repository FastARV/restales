import Realm from "realm";

import schema from "./schemas";

export default function getRealm() {
  return Realm.open({ schema });
}
