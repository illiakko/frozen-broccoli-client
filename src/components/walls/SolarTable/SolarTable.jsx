import React from 'react';
import "./SolarTable.css";

function SolarTable(props) {


    return (
        <React.Fragment >
            <p>When the outer wall surface is exposed to the sun  </p>
            <p>light, it is caused additional temperature difference</p>
            <p>It is called "Sun effect" and measured in °C.</p>
            <p>It depends on the color and the texture of the wall </p>
            <p>surface, cardinal direction of the wall, latitude of </p>
            <p>the place where cold room is located. In the table below –</p>
            <p>is an average rage of the sun effect for medium sun reflective</p>
            <p>wall surface</p>

            <table className='iksweb'>

                <tbody>
                    <tr>
                        <td rowspan="2">Latitude</td>
                        <td rowspan="2">Roof</td>
                        <td colspan="8">Мertical wall facing the cardinal direction</td>
                    </tr>
                    <tr>
                        <td>South</td>
                        <td>SE</td>
                        <td>East</td>
                        <td>NE</td>
                        <td>North </td>
                        <td>NW</td>
                        <td>West</td>
                        <td>SW</td>
                    </tr>
                    <tr>
                        <td>0°</td>
                        <td>8.5</td>
                        <td>1.6</td>
                        <td>2.3</td>
                        <td>4.1</td>
                        <td>4.9</td>
                        <td>5.2</td>
                        <td>4.9</td>
                        <td>4.1</td>
                        <td>2.3</td>
                    </tr>
                    <tr>
                        <td>10°</td>
                        <td>9.4</td>
                        <td>1.8</td>
                        <td>2.8</td>
                        <td>4.4</td>
                        <td>4.6</td>
                        <td>4.2</td>
                        <td>4.6</td>
                        <td>4.4</td>
                        <td>2.8</td>
                    </tr>
                    <tr>
                        <td>20°</td>
                        <td>10.1</td>
                        <td>1.9</td>
                        <td>3.5</td>
                        <td>4.9</td>
                        <td>4.5</td>
                        <td>3.2</td>
                        <td>4.5</td>
                        <td>4.9</td>
                        <td>3.6</td>
                    </tr>
                    <tr>
                        <td>30°</td>
                        <td>10.3</td>
                        <td>2.7</td>
                        <td>4.3</td>
                        <td>5.1</td>
                        <td>4.3</td>
                        <td>2.6</td>
                        <td>4.2</td>
                        <td>5.1</td>
                        <td>4.3</td>
                    </tr>
                    <tr>
                        <td>40°</td>
                        <td>10.2</td>
                        <td>3.8</td>
                        <td>5.0</td>
                        <td>5.2</td>
                        <td>3.9</td>
                        <td>2.4</td>
                        <td>3.9</td>
                        <td>4.2</td>
                        <td>4.9</td>
                    </tr>
                    <tr>
                        <td>50°</td>
                        <td>9.9</td>
                        <td>5.0</td>
                        <td>5.7</td>
                        <td>5.5</td>
                        <td>3.9</td>
                        <td>2.5</td>
                        <td>3.9</td>
                        <td>5.5</td>
                        <td>5.7</td>
                    </tr>
                    <tr>
                        <td>60°</td>
                        <td>9.3</td>
                        <td>6.0</td>
                        <td>6.3</td>
                        <td>5.6</td>
                        <td>3.8</td>
                        <td>2.6</td>
                        <td>4.0</td>
                        <td>5.7</td>
                        <td>6.3</td>
                    </tr>
                    <tr>
                        <td>70°</td>
                        <td>8.7</td>
                        <td>6.8</td>
                        <td>6.8</td>
                        <td>6.1</td>
                        <td>4.4</td>
                        <td>3.3</td>
                        <td>4.3</td>
                        <td>6.1</td>
                        <td>6.8</td>
                    </tr>
                    <tr>
                        <td>80°</td>
                        <td>8.7</td>
                        <td>7.3</td>
                        <td>7.2</td>
                        <td>6.9</td>
                        <td>6.2</td>
                        <td>5.9</td>
                        <td>6.2</td>
                        <td>6.9</td>
                        <td>7.2</td>
                    </tr>
                    <tr>
                        <td>90°</td>
                        <td>8.7</td>
                        <td>7.0</td>
                        <td>7.0</td>
                        <td>7.0</td>
                        <td>7.0</td>
                        <td>7.0</td>
                        <td>7.0</td>
                        <td>7.0</td>
                        <td>7.0</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default SolarTable;