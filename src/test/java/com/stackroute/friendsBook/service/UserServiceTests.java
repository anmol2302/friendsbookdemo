//package com.stackroute.friendsBook.service;
//
//import com.stackroute.friendsBook.Exceptions.UserAlreadyExistsException;
//import com.stackroute.friendsBook.model.User;
//import com.stackroute.friendsBook.repository.UserRepository;
//import org.junit.After;
//import org.junit.Assert;
//import org.junit.Before;
//import org.junit.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.Mockito.times;
//import static org.mockito.Mockito.when;
//
//
//public class UserServiceTests {
//
//    User user;
//
//
//    //Create a mock for MovieRepository
//    @Mock//test double
//            UserRepository userRepository;
//
//    //Inject the mocks as dependencies into MovieServiceImpl
//    @InjectMocks
//    UserService userService;
//    List<User> list = null;
//
//    @Before
//    public void setUp() {
//        //Initialising the mock object
//        MockitoAnnotations.initMocks(this);
//        user = new User();
//        user.setAddress("Bangalore");
//        user.setContactNo("987654321");
//        user.setEmail("a@gmail.com");
//        user.setName("a");
//        user.setUserProfileImageUrl("\"https://www.google.com/search?q=google+images&client=ubuntu&hs=5bQ&channel=fs&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi27qPnxq3eAhWFto8KHa_FBesQ_AUIDigB&biw=1366&bih=639#imgrc=faVYp-YX1tMUxM:\"");
//
//        list = new ArrayList<>();
//        list.add(user);
//
//
//    }
//
//    @After
//    public void tearDown() {
//        userRepository.deleteAll();
//    }
//
//    @Test
//    public void addUserTestSuccess() throws UserAlreadyExistsException {
//
//        when(userRepository.save((User) any())).thenReturn(user);
//        User savedUser = userService.addUser(user);
//        Assert.assertEquals(user, savedUser);
//
//
//    }
//
//
//    @Test
//    public void testgetAllUsers() {
//
//        userRepository.save(user);
//        when(userRepository.getAllUsers()).thenReturn(list);
//
//        List<User> userList = userService.getAll();
//        System.out.println(userList);
//        System.out.println(list);
//        Assert.assertEquals(list, userList);
//
//    }
//
//    @Test
//    public void testgetById(){
//
//        userRepository.save(user);
//        when(userRepository.getByid(1L)).thenReturn(user);
//        Assert.assertEquals("a@gmail.com", user.getEmail() );
//
//    }
//
//}