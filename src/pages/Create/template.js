import Textarea from '../../components/textarea';
import Input from '../../components/input';
import Button from '../../components/button';
export default {
    name: 'CreatePage',
    components: {
        'x-textarea': Textarea,
        'x-input': Input,
        'x-button': Button
    },
    data() {
        return {
            isActive: false
        }
    }
}