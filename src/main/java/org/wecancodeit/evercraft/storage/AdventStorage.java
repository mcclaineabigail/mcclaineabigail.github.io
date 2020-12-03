package org.wecancodeit.evercraft.storage;

import org.springframework.stereotype.Service;

@Service
public class AdventStorage {

    private AdventRepository adventRepo;

    public AdventStorage(AdventRepository adventRepo) {
        this.adventRepo = adventRepo;
    }
}
