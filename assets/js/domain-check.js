function domainCheck(domain) {
    console.log(domain);
    if (domain.endsWith('.onion')) {
        var validOnionDomains = [
            '7pgscfww465uv5rgddfrfiyu2rfz3slodngzl2mh2l7pzhpvcqq33sad.onion',
            'acnnwjkiuoqhexhtlhjr7plkbe7wfnkmjdkxw7uziuyymujkmyem6bid.onion',
            'klhsanejamuagdnpysjkilmlmd5hsc2xzzdjmitq4xuef6ex23vbakid.onion',
            '4ack2kwlnnmejgdpi7qfzanktpz2hggasyhupnrxhsr7tdzchj4alxqd.onion'
        ];

        if (!validOnionDomains.includes(domain)) {
            window.location.href = 'http://7pgscfww465uv5rgddfrfiyu2rfz3slodngzl2mh2l7pzhpvcqq33sad.onion/';
        }
    }
    else if (domain.endsWith('.i2p')) {
        var validI2pDomains = [
            'elderrocker.i2p',
            'gl6vzyjnv62kp3vjmmouwlvsrbp2bujk2cev6frgnln5vfepy2xq.b32.i2p',
            'gbs72fblmtt7ycxzzuol5exams4bvlfafm2jjtu4pvttvtgk5sgq.b32.i2p'
        ];

        if (!validI2pDomains.includes(domain)) {
            window.location.href = 'http://gl6vzyjnv62kp3vjmmouwlvsrbp2bujk2cev6frgnln5vfepy2xq.b32.i2p/';
        }
    }
}

var domain = window.location.hostname;

domainCheck(domain);
