import SensitiveInfoStorage from 'react-native-sensitive-info';
import { Storage } from '@common/constants';

export function getItem(key) {
    return SensitiveInfoStorage.getItem(key, Storage.CONFIG).then(item => item || '');
}

export function setItem(key, value) {
    debugger;
    return SensitiveInfoStorage.setItem(key, value || '', Storage.CONFIG);
}