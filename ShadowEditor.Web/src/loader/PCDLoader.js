import BaseLoader from './BaseLoader';

/**
 * PCDLoader
 * @author tengge / https://github.com/tengge1
 */
function PCDLoader() {
    BaseLoader.call(this);
}

PCDLoader.prototype = Object.create(BaseLoader.prototype);
PCDLoader.prototype.constructor = PCDLoader;

PCDLoader.prototype.load = function (url, options) { // eslint-disable-line
    return new Promise(resolve => {
        this.require('PCDLoader').then(() => {
            var loader = new THREE.PCDLoader();
            loader.load(url, mesh => {
                resolve(mesh);
            }, undefined, () => {
                resolve(null);
            });
        });
    });
};

export default PCDLoader;