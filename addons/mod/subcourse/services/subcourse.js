// Copyright (C) 2017 Mike Churchward <mike.churchward@poetgroup.org>
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm.addons.mod_subcourse')

/**
 * Subcourse service.
 *
 * @module mm.addons.mod_subcourse
 * @ngdoc service
 * @name $mmaModSubcourse
 */
    .factory('$mmaModSubcourse', function ($q, $mmSite, $mmFS, $mmUtil, $mmSitesManager, mmaModSubcourseComponent, $mmFilepool) {
        var self = {};

        /**
         * Return whether or not the plugin is enabled in a certain site. Plugin is enabled if the subcourse WS are available.
         *
         * @module mm.addons.mod_subcourse
         * @ngdoc method
         * @name $mmaModSubcourse#isPluginEnabled
         * @param  {String} [siteId] Site ID. If not defined, current site.
         * @return {Promise}         Promise resolved with true if plugin is enabled, rejected or resolved with false otherwise.
         */
        self.isPluginEnabled = function (siteId) {
            siteId = siteId || $mmSite.getId();

            return Promise.resolve(true);
        };

        self.getRefCourse = function (subcourseId) {
            return $mmSitesManager.getSite().then(function (site) {
                var params = {
                        subcourseid: subcourseId
                    },
                    preSets = {
                        cacheKey: 'mmaModSubcourse:' + subcourseId
                    };

                return site.read('mod_subcourse_get_refcourse', params, preSets);
            });
        };

        return self;
    });
