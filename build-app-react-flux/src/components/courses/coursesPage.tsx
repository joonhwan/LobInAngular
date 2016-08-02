import * as React from 'react';
import {Link} from 'react-router'
import {Course} from '../../api/courseApi';
import {CourseStore} from '../../stores/courseStore';

interface Props {
}

interface States {
  courses:Course[];
}

export class CoursesPage extends React.Component<Props, States> {
  private _cb:Function;

  constructor(props:Props, context?:any) {
    super(props, context);
    this.state = {
      courses: CourseStore.getAllCourses()
    };
    this._cb = () => {
      this.onChange()
    }
  }

  componentWillMount() {
    console.log("CoursePage will Mount");
    CourseStore.addChangeListener(this._cb);
  }

  componentWillUnmount() {
    console.log("CoursePage will Unmount");
    CourseStore.removeChangeListener(this._cb);
  }

  onChange() {
    this.setState({
      courses:CourseStore.getAllCourses()
    })
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Lenght</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map(this.createCourseRow, this) }
          </tbody>
        </table>
      </div>
    );
  }

  private createCourseRow(course:Course) {
    let link = "author/edit/" + course.author.id;
    return (
      <tr key={course.id}>
        <td><a href="#">Watch</a></td>
        <td><a href="#">Delete</a></td>
        <td><a href='#'>{course.title}</a></td>
        <td><Link to={link}>{course.author.name}</Link></td>
        <td>{course.category}</td>
        <td>{course.length}</td>
      </tr>
    )
  }
}