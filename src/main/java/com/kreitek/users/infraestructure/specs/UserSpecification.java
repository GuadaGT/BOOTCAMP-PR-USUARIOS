package com.kreitek.users.infraestructure.specs;

import com.kreitek.users.domain.entity.User;
import com.kreitek.users.infraestructure.specs.shared.EntitySpecification;
import com.kreitek.users.infraestructure.specs.shared.SearchCriteria;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public class UserSpecification extends EntitySpecification<User> implements Specification<User> {

    public UserSpecification(List<SearchCriteria> criteria) {
        this.criteria = criteria;
    }

}