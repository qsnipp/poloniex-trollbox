/*
 * You may redistribute this program and/or modify it under the terms of
 * the GNU General Public License as published by the Free Software Foundation,
 * either version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var Polo = require("poloniex-unofficial");
var poloPush = new Polo.PushWrapper();
poloPush.trollbox((err, response) => {
    if (err) {
        console.error("An error occurred: " + err.msg);
        return true;
    }
    console.log("<" + response.username + "> " + response.message.replace(/&#([0-9]+);/g, function (all, x) { return String.fromCharCode(x); }));
});
