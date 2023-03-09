export default class AlertService {
    
    open(type, message) {
        const alert = document.createElement('div');
        alert.className = `top-right alert alert-${type}`
        alert.innerHTML = message;
        document.body.appendChild(alert);
        setTimeout(() => document.body.removeChild(alert), 3000);
    }
}