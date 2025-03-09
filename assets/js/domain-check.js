function domainCheck(domain) {
    console.log(domain);
    if (domain.endsWith('.onion')) {
        var validOnionDomains = [
            '7pgscfww465uv5rgddfrfiyu2rfz3slodngzl2mh2l7pzhpvcqq33sad.onion',
            'azgmf236t2vpci7fvne2nfs5nd32pxb55xcu37ejlrtlszxoxjabqbid.onion'
        ];

        if (!validOnionDomains.includes(domain)) {
            window.location.href = 'http://7pgscfww465uv5rgddfrfiyu2rfz3slodngzl2mh2l7pzhpvcqq33sad.onion/';
        }
    }
    else if (domain.endsWith('.i2p')) {
        var validI2pDomains = [
            'elder-rocker.i2p',
            'elder-rocker-shared-files.i2p',
            'gl6vzyjnv62kp3vjmmouwlvsrbp2bujk2cev6frgnln5vfepy2xq.b32.i2p',
            'hieubod75sbiar7j4phvhwywaytqtv3l7zh66gy3lltceogttv3a.b32.i2p'
        ];

        if (!validI2pDomains.includes(domain)) {
            window.location.href = 'http://gl6vzyjnv62kp3vjmmouwlvsrbp2bujk2cev6frgnln5vfepy2xq.b32.i2p/';
        }
    }
}

var domain = window.location.hostname;

domainCheck(domain);
