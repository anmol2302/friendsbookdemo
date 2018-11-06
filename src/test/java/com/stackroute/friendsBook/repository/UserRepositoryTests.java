package com.stackroute.friendsBook.repository;


import com.stackroute.friendsBook.model.User;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.neo4j.DataNeo4jTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RunWith(SpringRunner.class)
@DataNeo4jTest

public class UserRepositoryTests {


    @Autowired
    UserRepository userRepository;
    User user;

    @Before
    public void setUp(){
        user = new User();

        user.setAddress("Bangalore");
        user.setContactNo("987654321");
        user.setEmail("a@gmail.com");
        user.setName("a");
        user.setUserProfileImageUrl("\"https://www.google.com/search?q=google+images&client=ubuntu&hs=5bQ&channel=fs&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi27qPnxq3eAhWFto8KHa_FBesQ_AUIDigB&biw=1366&bih=639#imgrc=faVYp-YX1tMUxM:\"");
        //user.setFriends([]);
    }


    @After
    public void tearDown(){
        userRepository.deleteAll();
    }



    @Test
    public void testGetAllUsers(){
        Set<Long> friends=new HashSet<>();
        userRepository.save(user);
        List<User> list = userRepository.getAllUsers();
        Assert.assertEquals("a@gmail.com",list.get(0).getEmail());

    }


    @Test
    public void testGetAllUsersFailure(){

        userRepository.save(user);

        List<User> list = userRepository.getAllUsers();
        Assert.assertNotEquals("abd@gmail.com",list.get(0).getEmail());

    }


    @Test
    public void getAllUserEmails(){

        userRepository.save(user);
        List<String> listEmail = userRepository.getAllUserEmails();
        Assert.assertEquals("a@gmail.com", listEmail.get(0));

    }

    @Test
    public void getAllUserEmailsFailure(){

        userRepository.save(user);
        List<String> listEmail = userRepository.getAllUserEmails();
        Assert.assertNotEquals("abd@gmail.com", listEmail.get(0));

    }

}